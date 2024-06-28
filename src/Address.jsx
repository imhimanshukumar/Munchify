import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setAddress as setReduxAddress, setLocation as setReduxLocation } from './addressSlice';
import debounce from 'lodash.debounce';

const Address = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const fetchSuggestions = async (input) => {
    if (input.length > 2) {
      const encodedAddress = encodeURIComponent(input);
      const url = `https://us1.locationiq.com/v1/autocomplete.php?key=pk.52edb4951867ed3df1b858c24daeae0f&q=${encodedAddress}&countrycodes=in&format=json`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setError('Too many requests. Please try again later.');
      }
    } else {
      setSuggestions([]);
    }
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

  const handleGeocode = async (selectedAddress) => {
    const encodedAddress = encodeURIComponent(selectedAddress || address);
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.52edb4951867ed3df1b858c24daeae0f&q=${encodedAddress}&countrycodes=in&format=json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      const { lat, lon } = data[0];
      const newLocation = { lat, lng: lon };
      setLocation(newLocation);
      setAddress(selectedAddress || address);
      setSuggestions([]);
      setError('');
      handleSetAddress(selectedAddress || address);
      handleSetLocation(newLocation);
    } catch (error) {
      console.error('Error geocoding address:', error);
      setError('Geocoding was not successful. Please try again.');
      setLocation(null);
    }
  };

  const handleSetAddress = (address) => {
    dispatch(setReduxAddress(address));
  };

  const handleSetLocation = (location) => {
    dispatch(setReduxLocation(location));
  };

  useEffect(() => {
    return () => {
      debouncedFetchSuggestions.cancel();
    };
  }, [debouncedFetchSuggestions]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ margin: '20px', maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '10px', position: 'relative' }}>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              debouncedFetchSuggestions(e.target.value);
            }}
            placeholder="Enter address"
          />
          {suggestions.length > 0 && (
            <ul style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              zIndex: 1,
              width: '100%',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              listStyleType: 'none',
              padding: '0',
              maxHeight: '200px',
              overflowY: 'auto',
            }}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleGeocode(suggestion.display_name)}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Address;

import React, { useState, useMemo } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import back from '../assets/back.svg';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Button } from "@mui/material";
import MailIcon from '@mui/icons-material/MailOutline';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Select from 'react-select'
import countryList from 'react-select-country-list'

const ShippingAddress = () => {
    const [scroll, setScroll] = React.useState(true);

  const [country, setCountry] = useState('India');
  const [region, setRegion] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
    setRegion('');
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const indiaRegions = CountryRegionData[country] || [];

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
  };

  const customLabel = (option) => countryList().getLabel(option.value);


  function handleSubmit(event) {
    event.preventDefault();
    setLayout(false);
  }

  const [state, setState] = useState({})

  function handleOnChange(value) {
    setState({
       phone: value
    });
 }
 const [layout, setLayout] = React.useState(undefined);
  return (
    <div>
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
          
        }}
      >
        <img src={back}  onClick={()=>{navigate(-1)}} style={{ width: 64, height: 26 ,objectFit:'contain'}} />
        <p style={{ fontSize: 18, fontWeight: 600, margin: 0, textAlign: 'center', color: '#252525' }}>
          Shipping Details
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginRight:20,width:52}}>
         
        </div>
      </div>
      <div style={{marginTop:12}}>
      <Divider orientation="horizontal"  />
      </div>

        <div style={{marginLeft:12,marginRight:12}}>
        <form onSubmit={handleSubmit} style={{ marginTop:32}} >
          <Stack spacing={2}>

          <FormControl>
          <FormLabel>Contact Number </FormLabel>
            <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange}
            dropdownClass="custom-dropdown-container"> <Input sx={{padding:1}} autoFocus required /></MuiPhoneNumber>
         </FormControl>
         <FormControl >
          <FormLabel>Email Address</FormLabel>
          <Input sx={{padding:1}} required startDecorator={<MailIcon/>} placeholder="youremail@gmail.com"/>
        </FormControl>

          </Stack>  


          </form>

          <Typography id="basic-modal-dialog-title" level="h4" sx={{ marginTop:2}}>
            Delivery Address
          </Typography>
          {/* <Typography id="basic-modal-dialog-description">
            Kindly fill the details to proceed with the order
          </Typography> */}


         <form onSubmit={handleSubmit}>
      <Stack spacing={2}>

      <FormControl >
          <FormLabel sx={{marginTop:2}}>Country</FormLabel>
          {/* <Input sx={{padding:1}} autoFocus required placeholder="Enter Your Full Name"/> */}
          <Select
            options={options.map((country) => ({
              value: country.value,
              label: customLabel(country),
            }))}
            value={value}
            onChange={changeHandler}
          />
        </FormControl>

        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input sx={{padding:1}} autoFocus required placeholder="Enter Your First Name"/>
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input sx={{padding:1}} autoFocus required placeholder="Enter Your Last Name"/>
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input sx={{padding:1}} autoFocus required multiline placeholder="Enter Address"/>
          
        </FormControl>

        <FormControl>
          <FormLabel>Land Mark</FormLabel>
          <Input sx={{padding:1}} autoFocus required placeholder="(optional)" multiline maxRows={5}/>
          </FormControl>

          <FormControl>
          <FormLabel>State</FormLabel>
          <RegionDropdown
            country={country}
            value={region}
            onChange={selectRegion}
            blankOptionLabel="Select Region"
            disableWhenEmpty={false}
        >
          {indiaRegions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </RegionDropdown>
      </FormControl>
        

        

        
        <Button variant="contained" type="submit" style={{background:'#252525',marginBottom:32}}>Save details</Button>
        {/* <Button variant="plain" color="neutral" style={{}}>Cancel</Button> */}

      </Stack>
    </form>
    </div>
      
    </div>
  )
}

export default ShippingAddress

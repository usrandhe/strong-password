import { Slider, Typography } from '@mui/material';

const PasswordStrengthSlider = ({ value, onChange }) => {
  return (
    <div>
      <Typography id="discrete-slider" variant="h6"  gutterBottom style={{ paddingTop: '20px', }}>
        Password Strength
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
  );
};

export default PasswordStrengthSlider;

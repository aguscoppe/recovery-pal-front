import { Grid, Card, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Exercise = ({ id, name, description, imgSrc, action }) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <Grid container alignItems='center'>
          <Grid item xs={action ? 5 : 6} margin='10px'>
            <img
              src={imgSrc}
              alt={name}
              style={{ width: '100%', height: '100%', borderRadius: '6px' }}
            />
          </Grid>
          <Grid item xs={5} margin='10px'>
            <Typography variant='h6' sx={{ fontWeight: '500' }}>
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </Grid>
          {action && (
            <Grid item xs={1}>
              <IconButton onClick={action.function}>
                {action.type === 'add' && <AddCircleIcon />}
                {action.type === 'remove' && <DeleteIcon />}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercise;

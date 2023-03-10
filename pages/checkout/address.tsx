import { ShopLayout } from '@/components/layouts'
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'

const AddressPage = () => {
  return (
    <ShopLayout title="Direccion" pageDescription="Confirmar direccion destino">
      <Typography variant="h1" component="h1">Direccion</Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>

        <Grid item xs={12} sm={6}>
          <TextField label="nombre" variant="filled" fullWidth/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="apellido" variant="filled" fullWidth/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion" variant="filled" fullWidth/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion 2 (opcional)" variant="filled" fullWidth/>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select
              variant="filled"
              label="Pais"
              value={1}
            >
              <MenuItem value={1}>Mexico</MenuItem>
              <MenuItem value={2}>USA</MenuItem>
              <MenuItem value={3}>Costa Rica</MenuItem>
              <MenuItem value={4}>Honduras</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Telefono" variant="filled" fullWidth/>
        </Grid>

      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          Revisar Pedido
        </Button>
      </Box>

    </ShopLayout>
  )
}
export default AddressPage

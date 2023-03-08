import NextLink from 'next/link'
import { ShopLayout } from '@/components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material'
import { OrderSummary, CartList } from '@/components/cart'

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de orden" pageDescription="Resumen de la orden">
      <Typography variant="h1" component="h1">Resumen de la orden</Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }}/>

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Direccion de entrega</Typography>
                <NextLink href="/checkout/address" passHref legacyBehavior>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Fabio Sanchez</Typography>
              <Typography>321 Tizimin Yuc</Typography>
              <Typography>Mexico CP 97702</Typography>
              <Typography>+52 78346784</Typography>

              <Divider sx={{ my: 1 }}/>

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref legacyBehavior>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default SummaryPage

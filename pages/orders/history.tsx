import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ShopLayout } from '@/components/layouts'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra si esta pagada la orden o no',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return (
        params.row.paid
          ? <Chip color="success" label="Pagada" variant="outlined"/>
          : <Chip color="error" label="No Pagada" variant="outlined"/>
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Orden',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullName: 'Fabio sanchez' },
  { id: 2, paid: false, fullName: 'Saulo sanchez' },
  { id: 3, paid: true, fullName: 'Amy sanchez' },
  { id: 4, paid: false, fullName: 'Mildred sanchez' }
]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
      <Typography variant="h1" component="h1">Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={rows}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
export default HistoryPage

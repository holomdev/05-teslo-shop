import { IProduct } from '@/interfaces'
import { Grid } from '@mui/material'
import { FunctionComponent } from 'react'
import { ProductCard } from './ProductCard'

interface Props {
  products: IProduct[];
}

export const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {
        products.map(product => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))
      }
    </Grid>
  )
}

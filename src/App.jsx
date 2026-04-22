import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { CartSidebar } from './components/features'
import { Spinner } from './components/common'
import { UIProvider } from './contexts/UIContext'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Orders = lazy(() => import('./pages/Orders'))
const OrderDetail = lazy(() => import('./pages/OrderDetail'))
const Account = lazy(() => import('./pages/Account'))
const Admin = lazy(() => import('./pages/Admin'))
const Auth = lazy(() => import('./pages/Auth'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Categories = lazy(() => import('./pages/Categories'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

const Loading = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh'
  }}>
    <Spinner size="large" />
  </div>
)

function App() {
  return (
    <UIProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetail />} />
            <Route path="account" element={<Account />} />
            <Route path="auth" element={<Auth />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Suspense>
      <CartSidebar />
    </UIProvider>
  )
}

export default App
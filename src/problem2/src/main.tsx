import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils'
import { CssBaseline } from '@mui/material'
import { Toaster } from 'react-hot-toast'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Toaster position='bottom-center' reverseOrder={false} />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)

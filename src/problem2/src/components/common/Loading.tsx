import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const LoadingStyled = styled('div')({
	transform: 'rotateZ(45deg)',
	perspective: '1000px',
	borderRadius: '50%',
	width: '3vw',
	height: '3vw',
	color: '#fff',
	position: 'relative',
	'&::before': {
		content: "''",
		display: 'block',
		position: 'absolute',
		top: '0',
		left: '0',
		width: 'inherit',
		height: 'inherit',
		borderRadius: '50%',
		transform: 'rotateX(70deg)',
		animation: '1s spin linear infinite'
	},
	'&:after': {
		content: "''",
		display: 'block',
		position: 'absolute',
		top: 0,
		left: 0,
		width: 'inherit',
		height: 'inherit',
		borderRadius: '50%',
		transform: 'rotateY(70deg)',
		animation: '1s spin linear infinite',
		animationDelay: '.4s',
		color: '#38EBBA'
	},
	animation: '$rotate 1s linear infinite',
	'@keyframes rotate': {
		'0%': {
			transform: 'translate(-50%, -50%) rotateZ(0deg)'
		},
		'100%': {
			transform: 'translate(-50%, -50%) rotateZ(360deg)'
		}
	},
	'@keyframes rotateccw': {
		'0%': {
			transform: 'translate(-50%, -50%) rotate(0deg)'
		},
		'100%': {
			transform: 'translate(-50%, -50%) rotate(-360deg)'
		}
	},
	'@keyframes spin': {
		'0%, 100%': {
			boxShadow: '.2em 0px 0 0px currentcolor'
		},
		'12%': {
			boxShadow: '.2em .2em 0 0 currentcolor'
		},
		'25%': {
			boxShadow: '0 .2em 0 0px currentcolor'
		},
		'37%': {
			boxShadow: '-.2em .2em 0 0 currentcolor'
		},
		'50%': {
			boxShadow: '-.2em 0 0 0 currentcolor'
		},
		'62%': {
			boxShadow: '-.2em -.2em 0 0 currentcolor'
		},
		'75%': {
			boxShadow: '0px -.2em 0 0 currentcolor'
		},
		'87%': {
			boxShadow: '.2em -.2em 0 0 currentcolor'
		}
	}
})

export function Loading() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
			<LoadingStyled />
		</Box>
	)
}

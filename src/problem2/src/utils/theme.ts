import { createTheme } from '@mui/material/styles'

const themeOptions: any = {
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'xl'],
		values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
		unit: 'px'
	},
	direction: 'ltr',
	palette: {
		mode: 'dark',
		customColors: {
			dark: '#EAEAFF',
			main: '#EAEAFF',
			light: '#4C4E64',
			darkBg: '#282A42',
			lightBg: '#F7F7F9',
			bodyBg: '#282A42',
			tooltipBg: '#464A65',
			tableHeaderBg: '#3A3E5B'
		},
		common: { black: '#000', white: '#FFF' },
		primary: {
			light: '#28D1D4',
			main: '#38EBBA',
			dark: '#28D475',
			contrastText: '#000000'
		},
		secondary: {
			light: '#7F889B',
			main: '#6D788D',
			dark: '#606A7C',
			contrastText: '#FFF'
		},
		success: {
			light: '#83E542',
			main: '#72E128',
			dark: '#64C623',
			contrastText: '#FFF'
		},
		error: {
			light: '#FF625F',
			main: '#FF4D49',
			dark: '#E04440',
			contrastText: '#FFF'
		},
		warning: {
			light: '#FDBE42',
			main: '#FDB528',
			dark: '#DF9F23',
			contrastText: '#FFF'
		},
		info: {
			light: '#40CDFA',
			main: '#26C6F9',
			dark: '#21AEDB',
			contrastText: '#FFF'
		},
		grey: {
			50: '#FAFAFA',
			100: '#F5F5F5',
			200: '#EEEEEE',
			300: '#E0E0E0',
			400: '#BDBDBD',
			500: '#9E9E9E',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
			A100: '#D5D5D5',
			A200: '#AAAAAA',
			A400: '#616161',
			A700: '#303030'
		},
		text: {
			primary: 'rgba(234, 234, 255, 0.87)',
			secondary: 'rgba(234, 234, 255, 0.68)',
			disabled: 'rgba(234, 234, 255, 0.38)',
			icon: 'rgba(255, 255, 255, 0.5)'
		},
		divider: 'rgba(234, 234, 255, 0.12)',
		background: { paper: '#30334E', default: 'transparent' },
		action: {
			active: 'rgba(234, 234, 255, 0.54)',
			hover: 'rgba(234, 234, 255, 0.05)',
			hoverOpacity: 0.05,
			selected: 'rgba(234, 234, 255, 0.08)',
			disabled: 'rgba(234, 234, 255, 0.26)',
			disabledBackground: 'rgba(234, 234, 255, 0.12)',
			focus: 'rgba(234, 234, 255, 0.12)',
			selectedOpacity: 0.16,
			disabledOpacity: 0.38,
			focusOpacity: 0.12,
			activatedOpacity: 0.24
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: 'transparent',
					overflowX: 'hidden',
					userSelect: 'none',
					height: '100vh',

					'*::-webkit-scrollbar': {
						width: '0.3vw',
						borderRadius: '1vw'
					},
					'*::-webkit-scrollbar-track': {
						background: '#5252522c',
						borderRadius: '1vw'
					},
					'*::-webkit-scrollbar-thumb': {
						background: '#38ebbb83',
						borderRadius: '1vw'
					},
					'*::-webkit-scrollbar-thumb:hover': {
						background: '#38ebbb',
						borderRadius: '1vw'
					}
				}
			}
		},
		MuiFab: {
			styleOverrides: {
				root: {
					boxShadow:
						'0px 3px 5px -1px rgba(20, 21, 33, 0.2), 0px 5px 8px 0px rgba(20, 21, 33, 0.14), 0px 1px 14px 0px rgba(20, 21, 33, 0.12)'
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				outlined: {
					'&.MuiChip-colorDefault': {
						borderColor: 'rgba(234, 234, 255, 0.22)'
					}
				},
				avatar: { color: 'rgba(234, 234, 255, 0.87)' },
				iconColorDefault: { color: 'rgba(234, 234, 255, 0.87)' },
				deletableColorPrimary: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(102, 108, 255, 0.7)',
						'&:hover': { color: '#666CFF' }
					}
				},
				deletableColorSecondary: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(109, 120, 141, 0.7)',
						'&:hover': { color: '#6D788D' }
					}
				},
				deletableColorSuccess: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(114, 225, 40, 0.7)',
						'&:hover': { color: '#72E128' }
					}
				},
				deletableColorError: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(255, 77, 73, 0.7)',
						'&:hover': { color: '#FF4D49' }
					}
				},
				deletableColorWarning: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(253, 181, 40, 0.7)',
						'&:hover': { color: '#FDB528' }
					}
				},
				deletableColorInfo: {
					'&.MuiChip-light .MuiChip-deleteIcon': {
						color: 'rgba(38, 198, 249, 0.7)',
						'&:hover': { color: '#26C6F9' }
					}
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 0,
					marginRight: '0.75rem',
					color: 'rgba(234, 234, 255, 0.68)'
				}
			}
		},
		MuiListItemAvatar: {
			styleOverrides: { root: { minWidth: 0, marginRight: '1rem' } }
		},
		MuiListItemText: {
			styleOverrides: {
				dense: {
					'& .MuiListItemText-primary': { color: 'rgba(234, 234, 255, 0.87)' },
					'& .MuiListItemText-primary, & .MuiListItemText-secondary': {
						lineHeight: 1.43
					}
				}
			}
		},
		MuiListSubheader: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					textTransform: 'uppercase',
					color: 'rgba(234, 234, 255, 0.87)'
				}
			}
		},
		MuiMenu: {
			styleOverrides: {
				root: {
					'& .MuiMenu-paper': {
						borderRadius: 5,
						boxShadow:
							'0px 5px 6px -3px rgba(20, 21, 33, 0.2), 0px 9px 12px 1px rgba(20, 21, 33, 0.14), 0px 3px 16px 2px rgba(20, 21, 33, 0.12)'
					}
				}
			}
		},
		MuiTabs: {
			styleOverrides: {
				vertical: {
					minWidth: 130,
					marginRight: '1rem',
					borderRight: '1px solid rgba(234, 234, 255, 0.12)',
					'& .MuiTab-root': { minWidth: 130 }
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: { lineHeight: 1.5 },
				textColorSecondary: {
					'&.Mui-selected': { color: 'rgba(234, 234, 255, 0.68)' }
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 2px 10px 0px rgba(20, 21, 33,  0.18)',
					'& .card-more-options': {
						marginTop: '-0.25rem',
						marginRight: '-0.75rem'
					}
				}
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': { paddingTop: 0 },
					'& .MuiCardHeader-subheader': { fontSize: '0.875rem' }
				},
				title: { lineHeight: 1.6, fontWeight: 500, fontSize: '1.25rem' },
				action: { marginTop: 0, marginRight: 0 }
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'& + .MuiCardContent-root': { paddingTop: 0 },
					'&:last-of-type': { paddingBottom: '1.25rem' },
					'& + .MuiCardActions-root': { paddingTop: 0 }
				}
			}
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'&.card-action-dense': {
						padding: '0rem 0.625rem 0.625rem',
						'.MuiCard-root .MuiCardMedia-root + &': { paddingTop: '0.625rem' },
						'.MuiCard-root &:first-of-type': {
							paddingTop: '1.25rem',
							paddingBottom: '1.25rem',
							'& + .MuiCardContent-root': { paddingTop: 0 },
							'& + .MuiCardHeader-root': { paddingTop: 0 }
						}
					},
					'& .MuiButton-text': {
						paddingLeft: '0.625rem',
						paddingRight: '0.625rem'
					}
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: { root: { color: 'rgba(234, 234, 255, 0.68)' } }
		},
		MuiInput: {
			styleOverrides: {
				root: {
					lineHeight: '1.5rem',
					'&:before': { borderBottom: '1px solid rgba(234, 234, 255, 0.22)' },
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: '1px solid rgba(234, 234, 255, 0.32)'
					},
					'&.Mui-disabled:before': { borderBottomStyle: 'solid' }
				}
			}
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					backgroundColor: 'rgba(234, 234, 255, 0.05)',
					'&:hover:not(.Mui-disabled)': {
						backgroundColor: 'rgba(234, 234, 255, 0.08)'
					},
					'&:before': { borderBottom: '1px solid rgba(234, 234, 255, 0.22)' },
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: '1px solid rgba(234, 234, 255, 0.32)'
					},
					'&.Mui-disabled': {
						backgroundColor: 'rgba(234, 234, 255, 0.05)',
						'&:before': { borderBottomStyle: 'solid' }
					}
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					'&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgba(234, 234, 255, 0.32)'
					},
					'&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: '#FF4D49'
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgba(234, 234, 255, 0.22)'
					},
					'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgba(234, 234, 255, 0.38)'
					}
				}
			}
		},
		MuiSelect: {
			styleOverrides: {
				select: {
					minWidth: '6rem !important',
					'&.MuiTablePagination-select': { minWidth: '1.5rem !important' },
					'&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgba(234, 234, 255, 0.22)'
					}
				}
			}
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					'& .MuiAlertTitle-root': { marginBottom: '0.25rem' },
					'& a': { fontWeight: 500, color: 'inherit' }
				},
				standardSuccess: {
					color: 'rgb(128, 228, 61)',
					backgroundColor: 'rgba(114, 225, 40, 0.12)',
					'& .MuiAlertTitle-root': { color: 'rgb(128, 228, 61)' },
					'& .MuiAlert-icon': { color: 'rgb(128, 228, 61)' }
				},
				standardInfo: {
					color: 'rgb(59, 203, 249)',
					backgroundColor: 'rgba(38, 198, 249, 0.12)',
					'& .MuiAlertTitle-root': { color: 'rgb(59, 203, 249)' },
					'& .MuiAlert-icon': { color: 'rgb(59, 203, 249)' }
				},
				standardWarning: {
					color: 'rgb(253, 188, 61)',
					backgroundColor: 'rgba(253, 181, 40, 0.12)',
					'& .MuiAlertTitle-root': { color: 'rgb(253, 188, 61)' },
					'& .MuiAlert-icon': { color: 'rgb(253, 188, 61)' }
				},
				standardError: {
					color: 'rgb(255, 94, 91)',
					backgroundColor: 'rgba(255, 77, 73, 0.12)',
					'& .MuiAlertTitle-root': { color: 'rgb(255, 94, 91)' },
					'& .MuiAlert-icon': { color: 'rgb(255, 94, 91)' }
				},
				outlinedSuccess: {
					borderColor: '#72E128',
					color: 'rgb(128, 228, 61)',
					'& .MuiAlertTitle-root': { color: 'rgb(128, 228, 61)' },
					'& .MuiAlert-icon': { color: '#72E128' }
				},
				outlinedInfo: {
					borderColor: '#26C6F9',
					color: 'rgb(59, 203, 249)',
					'& .MuiAlertTitle-root': { color: 'rgb(59, 203, 249)' },
					'& .MuiAlert-icon': { color: '#26C6F9' }
				},
				outlinedWarning: {
					borderColor: '#FDB528',
					color: 'rgb(253, 188, 61)',
					'& .MuiAlertTitle-root': { color: 'rgb(253, 188, 61)' },
					'& .MuiAlert-icon': { color: '#FDB528' }
				},
				outlinedError: {
					borderColor: '#FF4D49',
					color: 'rgb(255, 94, 91)',
					'& .MuiAlertTitle-root': { color: 'rgb(255, 94, 91)' },
					'& .MuiAlert-icon': { color: '#FF4D49' }
				},
				filled: { fontWeight: 400 }
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					borderRadius: 8,
					lineHeight: 1.715,
					padding: '0.4375rem 0.75rem',
					'&.MuiButton-textPrimary:hover': {
						backgroundColor: 'rgba(102, 108, 255, 0.08)'
					},
					'&.MuiButton-textSecondary:hover': {
						backgroundColor: 'rgba(109, 120, 141, 0.08)'
					},
					'&.MuiButton-textSuccess:hover': {
						backgroundColor: 'rgba(114, 225, 40, 0.08)'
					},
					'&.MuiButton-textError:hover': {
						backgroundColor: 'rgba(255, 77, 73, 0.08)'
					},
					'&.MuiButton-textWarning:hover': {
						backgroundColor: 'rgba(253, 181, 40, 0.08)'
					},
					'&.MuiButton-textInfo:hover': {
						backgroundColor: 'rgba(38, 198, 249, 0.08)'
					}
				},
				contained: {
					boxShadow: '0px 4px 8px -4px rgba(20, 21, 33, 0.42)',
					padding: '0.4375rem 1.375rem'
				},
				outlined: {
					lineHeight: 1.572,
					padding: '0.4375rem 1.3125rem',
					'&.MuiButton-outlinedPrimary:hover': {
						backgroundColor: 'rgba(102, 108, 255, 0.08)'
					},
					'&.MuiButton-outlinedSecondary:hover': {
						backgroundColor: 'rgba(109, 120, 141, 0.08)'
					},
					'&.MuiButton-outlinedSuccess:hover': {
						backgroundColor: 'rgba(114, 225, 40, 0.08)'
					},
					'&.MuiButton-outlinedError:hover': {
						backgroundColor: 'rgba(255, 77, 73, 0.08)'
					},
					'&.MuiButton-outlinedWarning:hover': {
						backgroundColor: 'rgba(253, 181, 40, 0.08)'
					},
					'&.MuiButton-outlinedInfo:hover': {
						backgroundColor: 'rgba(38, 198, 249, 0.08)'
					}
				},
				sizeSmall: {
					lineHeight: 1.693,
					padding: '0.25rem 0.5625rem',
					'&.MuiButton-contained': { padding: '0.25rem 0.8125rem' },
					'&.MuiButton-outlined': {
						lineHeight: 1.539,
						padding: '0.25rem 0.75rem'
					}
				},
				sizeLarge: {
					lineHeight: 1.734,
					padding: '0.5rem 1.375rem',
					'&.MuiButton-contained': { padding: '0.5rem 1.625rem' },
					'&.MuiButton-outlined': {
						lineHeight: 1.6,
						padding: '0.5rem 1.5625rem'
					}
				}
			}
		},
		MuiButtonBase: { defaultProps: { disableRipple: false } },
		MuiIcon: {
			styleOverrides: {
				root: {
					width: 'unset',
					height: 'unset',
					fontSize: '1rem'
				}
			}
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					boxShadow:
						'0px 6px 6px -3px rgba(20, 21, 33, 0.2), 0px 10px 14px 1px rgba(20, 21, 33, 0.14), 0px 4px 18px 3px rgba(20, 21, 33, 0.12)',
					'&:not(.MuiDialog-paperFullScreen)': {
						'@media (max-width:599px)': {
							margin: '1rem',
							width: 'calc(100% - 2rem)',
							maxWidth: 'calc(100% - 2rem) !important'
						}
					},
					'& > .MuiList-root': {
						paddingLeft: '0.25rem',
						paddingRight: '0.25rem'
					}
				}
			}
		},
		MuiDialogTitle: { styleOverrides: { root: { padding: '1.25rem' } } },
		MuiDialogContent: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'& + .MuiDialogContent-root': { paddingTop: 0 },
					'& + .MuiDialogActions-root': { paddingTop: 0 },
					'& .PrivatePickersToolbar-root': {
						padding: '1rem 1.25rem',
						color: '#FFF',
						backgroundColor: '#666CFF',
						'& .MuiTypography-root': { color: '#FFF' },
						'& span.MuiTypography-overline': {
							fontSize: '1rem',
							lineHeight: '24px',
							letterSpacing: '0.15px'
						},
						'& ~ div[class^="css-"] > div[class^="css-"]': {
							marginTop: '1.5rem',
							marginBottom: '1.5rem',
							'& > div[class^="css-"]': {
								backgroundColor: '#282A42',
								'& ~ .MuiIconButton-root span.MuiTypography-caption': {
									color: 'inherit'
								}
							}
						},
						'& .PrivateTimePickerToolbar-hourMinuteLabel': {
							alignItems: 'center',
							'& > .MuiButton-root span.MuiTypography-root': {
								fontWeight: 500,
								lineHeight: '72px',
								fontSize: '3.75rem',
								letterSpacing: '-0.5px'
							},
							'& > .MuiTypography-root': {
								color: 'rgba(255, 255, 255, 0.54)',
								'& + .MuiButton-root > span.MuiTypography-root': {
									color: 'rgba(255, 255, 255, 0.54)'
								}
							}
						},
						'& .PrivateTimePickerToolbar-ampmSelection': {
							'& .MuiButton-root': { marginBottom: '0.5rem' },
							'.PrivateTimePickerToolbar-ampmLabel': {
								lineHeight: 1.5,
								fontWeight: 400,
								fontSize: '1rem',
								letterSpacing: '0.15px',
								'&:not(.Mui-selected)': { color: 'rgba(255, 255, 255, 0.54)' }
							}
						}
					},
					'& [role="listbox"] > span[role="option"]': {
						lineHeight: 1.25,
						fontSize: '0.875rem'
					}
				}
			}
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'&.dialog-actions-dense': { padding: '0.625rem', paddingTop: 0 }
				}
			}
		},
		MuiRating: {
			styleOverrides: {
				root: { color: '#FDB528' },
				iconEmpty: { color: 'rgba(234, 234, 255, 0.22)' }
			}
		},
		MuiTableContainer: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					borderTopColor: 'rgba(234, 234, 255, 0.12)'
				}
			}
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					textTransform: 'uppercase',
					'& .MuiTableCell-head': {
						fontWeight: 500,
						fontSize: '0.75rem',
						lineHeight: '1.959rem',
						letterSpacing: '0.17px'
					}
				}
			}
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					'& .MuiTableCell-body': {
						fontWeight: 400,
						fontSize: '0.875rem',
						lineHeight: '1.358rem',
						letterSpacing: '0.15px',
						'&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)':
							{ paddingTop: '1rem', paddingBottom: '1rem' }
					}
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ': { paddingLeft: '1.25rem' },
					'& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
						paddingRight: '1.25rem'
					}
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: '1px solid rgba(234, 234, 255, 0.12)',
					'& .MuiButton-root': {
						textTransform: 'uppercase',
						color: 'rgba(234, 234, 255, 0.68)'
					}
				},
				stickyHeader: { backgroundColor: '#3A3E5B' }
			}
		},
		MuiTablePagination: {
			styleOverrides: {
				root: {
					'& .MuiIconButton-root.Mui-disabled': {
						color: 'rgba(234, 234, 255, 0.54)'
					}
				},
				displayedRows: { color: 'rgba(234, 234, 255, 0.87)' }
			}
		},
		MuiAvatar: {
			styleOverrides: {
				colorDefault: {
					color: 'rgba(234, 234, 255, 0.68)',
					backgroundColor: 'rgba(234, 234, 255, 0.08)'
				},
				rounded: { borderRadius: 8 }
			}
		},
		MuiAvatarGroup: {
			styleOverrides: {
				root: {
					justifyContent: 'flex-end',
					'.MuiCard-root & .MuiAvatar-root': { borderColor: '#30334E' }
				}
			}
		},
		MuiDivider: { styleOverrides: { root: { margin: '0.5rem 0' } } },
		MuiPopover: {
			styleOverrides: {
				root: {
					'& .MuiPopover-paper': {
						boxShadow: '0px 2px 10px 0px rgba(20, 21, 33,  0.18)'
					}
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					borderRadius: 6,
					lineHeight: 1.455,
					backgroundColor: '#0a0a0aee'
				},
				arrow: { color: '#0a0a0aee' }
			}
		},
		MuiLink: {
			styleOverrides: { root: { textDecorationColor: 'transparent' } }
		},
		MuiBackdrop: {
			styleOverrides: {
				root: { backgroundColor: 'rgba(16, 17, 33, 0.87)' },
				invisible: { backgroundColor: 'transparent' }
			}
		},
		MuiDataGrid: {
			styleOverrides: {
				root: {
					border: 0,
					color: 'rgba(234, 234, 255, 0.87)',
					'& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': { outline: 'none' }
				},
				toolbarContainer: {
					paddingRight: '1.25rem !important',
					paddingLeft: '0.8125rem !important'
				},
				columnHeaders: {
					maxHeight: '54px !important',
					minHeight: '54px !important',
					lineHeight: '24px !important',
					backgroundColor: '#3A3E5B'
				},
				columnHeader: {
					height: '54px',
					'&:not(.MuiDataGrid-columnHeaderCheckbox)': {
						padding: '1rem',
						'&:first-of-type': { paddingLeft: '1.25rem' }
					},
					'&:last-of-type': { paddingRight: '1.25rem' }
				},
				columnHeaderCheckbox: {
					maxWidth: '58px !important',
					minWidth: '58px !important'
				},
				columnHeaderTitleContainer: { padding: 0 },
				columnHeaderTitle: {
					fontSize: '0.75rem',
					letterSpacing: '0.17px',
					textTransform: 'uppercase'
				},
				columnSeparator: { color: 'rgba(234, 234, 255, 0.12)' },
				virtualScroller: { marginTop: '54px !important' },
				virtualScrollerRenderZone: {
					'& .MuiDataGrid-row': {
						maxHeight: '50px !important',
						minHeight: '50px !important'
					}
				},
				row: { '&:last-child': { '& .MuiDataGrid-cell': { borderBottom: 0 } } },
				cell: {
					maxHeight: '50px !important',
					minHeight: '50px !important',
					lineHeight: '20px !important',
					borderColor: 'rgba(234, 234, 255, 0.12)',
					'&:not(.MuiDataGrid-cellCheckbox)': {
						padding: '1rem',
						'&:first-of-type': { paddingLeft: '1.25rem' }
					},
					'&:last-of-type': { paddingRight: '1.25rem' },
					'&:focus, &:focus-within': { outline: 'none' }
				},
				cellCheckbox: {
					maxWidth: '58px !important',
					minWidth: '58px !important'
				},
				editInputCell: {
					padding: 0,
					color: 'rgba(234, 234, 255, 0.87)',
					'& .MuiInputBase-input': { padding: 0 }
				},
				footerContainer: {
					minHeight: '50px !important',
					borderTop: '1px solid rgba(234, 234, 255, 0.12)',
					'& .MuiTablePagination-toolbar': { minHeight: '50px !important' },
					'& .MuiTablePagination-select': {
						color: 'rgba(234, 234, 255, 0.87)'
					}
				}
			},
			defaultProps: { rowHeight: 50, headerHeight: 54 }
		},
		MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					height: 6,
					borderRadius: 10,
					'&.MuiLinearProgress-colorPrimary': {
						backgroundColor: 'rgba(102, 108, 255, 0.12)'
					},
					'&.MuiLinearProgress-colorSecondary': {
						backgroundColor: 'rgba(109, 120, 141, 0.12)'
					},
					'&.MuiLinearProgress-colorSuccess': {
						backgroundColor: 'rgba(114, 225, 40, 0.12)'
					},
					'&.MuiLinearProgress-colorError': {
						backgroundColor: 'rgba(255, 77, 73, 0.12)'
					},
					'&.MuiLinearProgress-colorWarning': {
						backgroundColor: 'rgba(253, 181, 40, 0.12)'
					},
					'&.MuiLinearProgress-colorInfo': {
						backgroundColor: 'rgba(38, 198, 249, 0.12)'
					}
				},
				bar: { borderRadius: 10 }
			}
		},
		MuiSnackbarContent: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: '0.4375rem 1rem',
					backgroundColor: '#F5F5F5',
					'& .MuiSnackbarContent-message': { lineHeight: 1.429 }
				}
			}
		},
		MuiSwitch: {
			styleOverrides: {
				root: {
					'& .MuiSwitch-track': { borderRadius: 10 },
					'& .MuiSwitch-switchBase': {
						'&:not(.Mui-checked)': {
							'& .MuiSwitch-thumb': { color: '#FAFAFA' }
						}
					},
					'& .Mui-disabled + .MuiSwitch-track': {
						backgroundColor: 'rgb(234, 234, 255)'
					}
				}
			}
		},
		MuiTimelineItem: {
			styleOverrides: {
				root: {
					'&:not(:last-of-type)': {
						'& .MuiTimelineContent-root': { marginBottom: '1rem' }
					}
				}
			}
		},
		MuiTimelineConnector: {
			styleOverrides: {
				root: { backgroundColor: 'rgba(234, 234, 255, 0.12)' }
			}
		},
		MuiTimelineContent: { styleOverrides: { root: { marginTop: '0.125rem' } } },
		MuiTimelineDot: {
			styleOverrides: {
				filledPrimary: { boxShadow: '0 0 0 3px rgba(102, 108, 255, 0.12)' },
				filledSecondary: { boxShadow: '0 0 0 3px rgba(109, 120, 141, 0.12)' },
				filledSuccess: { boxShadow: '0 0 0 3px rgba(114, 225, 40, 0.12)' },
				filledError: { boxShadow: '0 0 0 3px rgba(255, 77, 73, 0.12)' },
				filledWarning: { boxShadow: '0 0 0 3px rgba(253, 181, 40, 0.12)' },
				filledInfo: { boxShadow: '0 0 0 3px rgba(38, 198, 249, 0.12)' },
				filledGrey: { boxShadow: '0 0 0 3px rgba(189, 189, 189, 0.12)' },
				outlinedPrimary: { '& svg': { color: '#666CFF' } },
				outlinedSecondary: { '& svg': { color: '#6D788D' } },
				outlinedSuccess: { '& svg': { color: '#72E128' } },
				outlinedError: { '& svg': { color: '#FF4D49' } },
				outlinedWarning: { '& svg': { color: '#FDB528' } },
				outlinedInfo: { '& svg': { color: '#26C6F9' } },
				outlinedGrey: { '& svg': { color: '#BDBDBD' } }
			}
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					'&:first-of-type': {
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8
					},
					'&:last-of-type': {
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8
					},
					'&.Mui-disabled': { backgroundColor: 'rgba(234, 234, 255, 0.12)' },
					'&.Mui-expanded': {
						boxShadow: '0px 4px 8px -4px rgba(20, 21, 33, 0.42)'
					}
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					padding: '0 1.25rem',
					'& + .MuiCollapse-root': {
						'& .MuiAccordionDetails-root:first-child': { paddingTop: 0 }
					}
				},
				content: { margin: '0.8125rem 0' }
			}
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					padding: '1.25rem',
					'& + .MuiAccordionDetails-root': { paddingTop: 0 }
				}
			}
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					'&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
						{ backgroundColor: 'rgba(234, 234, 255, 0.12)' }
				},
				outlined: { borderColor: 'rgba(234, 234, 255, 0.22)' },
				outlinedPrimary: {
					'&.Mui-selected': {
						backgroundColor: 'rgba(102, 108, 255, 0.12)',
						'&:hover': {
							backgroundColor: 'rgba(102, 108, 255, 0.24) !important'
						}
					}
				},
				outlinedSecondary: {
					'&.Mui-selected': {
						backgroundColor: 'rgba(109, 120, 141, 0.12)',
						'&:hover': {
							backgroundColor: 'rgba(109, 120, 141, 0.24) !important'
						}
					}
				},
				rounded: { borderRadius: 8 }
			}
		},
		MuiAutocomplete: {
			styleOverrides: {
				paper: { boxShadow: '0px 2px 10px 0px rgba(20, 21, 33,  0.18)' }
			}
		},
		MuiCalendarPicker: {
			styleOverrides: {
				root: {
					'& [role="presentation"]': {
						fontWeight: 400,
						'& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div': {
							marginRight: 0
						},
						'& .MuiIconButton-sizeSmall': { padding: '0.125rem' },
						'& + div .MuiIconButton-root:not(.Mui-disabled)': {
							color: 'rgba(234, 234, 255, 0.68)'
						}
					},
					'& .PrivatePickersSlideTransition-root': { minHeight: 240 },
					'& .MuiCalendarPicker-viewTransitionContainer .MuiTypography-root': {
						color: 'rgba(234, 234, 255, 0.38)'
					}
				}
			}
		},
		MuiPickersDay: {
			styleOverrides: {
				root: { fontSize: '0.875rem', letterSpacing: '0.15px' }
			}
		},
		MuiClockPicker: {
			styleOverrides: {
				arrowSwitcher: {
					'& .MuiIconButton-root:not(.Mui-disabled)': {
						color: 'rgba(234, 234, 255, 0.68)'
					},
					'& + div': {
						'& > div': {
							backgroundColor: '#282A42',
							'& ~ .MuiIconButton-root span.MuiTypography-caption': {
								color: 'inherit'
							}
						}
					}
				}
			}
		},
		MuiMonthPicker: {
			styleOverrides: {
				root: { '& > .MuiTypography-root.Mui-selected': { fontSize: '1rem' } }
			}
		},
		MuiBreadcrumbs: {
			styleOverrides: {
				li: { '& > .MuiLink-root': { textDecoration: 'none' } }
			}
		},
		MuiButtonGroup: { styleOverrides: { root: { borderRadius: 8 } } },
		MuiToggleButtonGroup: { styleOverrides: { root: { borderRadius: 8 } } },
		MuiToggleButton: { styleOverrides: { root: { borderRadius: 8 } } }
	},
	shape: { borderRadius: 10 },
	typography: {
		fontFamily:
			'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
		htmlFontSize: 16,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '3.5rem',
			lineHeight: 1.167,
			letterSpacing: '-1.5px',
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '4.7129rem' },
			'@media (min-width:900px)': { fontSize: '5.3556rem' },
			'@media (min-width:1200px)': { fontSize: '5.9983rem' }
		},
		h2: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '2.375rem',
			lineHeight: 1.2,
			letterSpacing: '-0.5px',
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '3.125rem' },
			'@media (min-width:900px)': { fontSize: '3.3333rem' },
			'@media (min-width:1200px)': { fontSize: '3.75rem' }
		},
		h3: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '2rem',
			lineHeight: 1.167,
			letterSpacing: 0,
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '2.5707rem' },
			'@media (min-width:900px)': { fontSize: '2.7849rem' },
			'@media (min-width:1200px)': { fontSize: '2.9991rem' }
		},
		h4: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '1.5625rem',
			lineHeight: 1.235,
			letterSpacing: '0.25px',
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '1.8219rem' },
			'@media (min-width:900px)': { fontSize: '2.0243rem' },
			'@media (min-width:1200px)': { fontSize: '2.0243rem' }
		},
		h5: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '1.25rem',
			lineHeight: 1.334,
			letterSpacing: 0,
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '1.3118rem' },
			'@media (min-width:900px)': { fontSize: '1.4993rem' },
			'@media (min-width:1200px)': { fontSize: '1.4993rem' }
		},
		h6: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '1.125rem',
			lineHeight: 1.6,
			letterSpacing: '0.15px',
			color: 'rgba(234, 234, 255, 0.87)',
			'@media (min-width:600px)': { fontSize: '1.25rem' },
			'@media (min-width:900px)': { fontSize: '1.25rem' },
			'@media (min-width:1200px)': { fontSize: '1.25rem' }
		},
		subtitle1: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '1rem',
			lineHeight: 1.75,
			letterSpacing: '0.15px',
			color: 'rgba(234, 234, 255, 0.87)'
		},
		subtitle2: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 700,
			fontSize: '0.875rem',
			lineHeight: 1.57,
			letterSpacing: '0.1px',
			color: 'rgba(234, 234, 255, 0.68)'
		},
		body1: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.5,
			letterSpacing: '0.15px',
			color: 'rgba(234, 234, 255, 0.87)'
		},
		body2: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 400,
			fontSize: '0.875rem',
			lineHeight: 1.429,
			letterSpacing: '0.15px',
			color: 'rgba(234, 234, 255, 0.68)'
		},
		button: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.75,
			textTransform: 'uppercase',
			letterSpacing: '0.4px',
			color: 'rgba(234, 234, 255, 0.87)'
		},
		caption: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 1.25,
			letterSpacing: '0.4px',
			color: 'rgba(234, 234, 255, 0.68)'
		},
		overline: {
			fontFamily:
				'"Public+Sans",Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 2.66,
			textTransform: 'uppercase',
			letterSpacing: '1px',
			color: 'rgba(234, 234, 255, 0.68)'
		}
	},
	shadows: [
		'none',
		'0px 2px 1px -1px rgba(20, 21, 33, 0.2), 0px 1px 1px 0px rgba(20, 21, 33, 0.14), 0px 1px 3px 0px rgba(20, 21, 33, 0.12)',
		'0px 3px 1px -2px rgba(20, 21, 33, 0.2), 0px 2px 2px 0px rgba(20, 21, 33, 0.14), 0px 1px 5px 0px rgba(20, 21, 33, 0.12)',
		'0px 4px 8px -4px rgba(20, 21, 33, 0.42)',
		'0px 6px 18px -8px rgba(20, 21, 33, 0.56)',
		'0px 3px 5px -1px rgba(20, 21, 33, 0.2), 0px 5px 8px 0px rgba(20, 21, 33, 0.14), 0px 1px 14px 0px rgba(20, 21, 33, 0.12)',
		'0px 2px 10px 0px rgba(20, 21, 33,  0.18)',
		'0px 4px 5px -2px rgba(20, 21, 33, 0.2), 0px 7px 10px 1px rgba(20, 21, 33, 0.14), 0px 2px 16px 1px rgba(20, 21, 33, 0.12)',
		'0px 5px 5px -3px rgba(20, 21, 33, 0.2), 0px 8px 10px 1px rgba(20, 21, 33, 0.14), 0px 3px 14px 2px rgba(20, 21, 33, 0.12)',
		'0px 5px 6px -3px rgba(20, 21, 33, 0.2), 0px 9px 12px 1px rgba(20, 21, 33, 0.14), 0px 3px 16px 2px rgba(20, 21, 33, 0.12)',
		'0px 6px 6px -3px rgba(20, 21, 33, 0.2), 0px 10px 14px 1px rgba(20, 21, 33, 0.14), 0px 4px 18px 3px rgba(20, 21, 33, 0.12)',
		'0px 6px 7px -4px rgba(20, 21, 33, 0.2), 0px 11px 15px 1px rgba(20, 21, 33, 0.14), 0px 4px 20px 3px rgba(20, 21, 33, 0.12)',
		'0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 12px 17px 2px rgba(20, 21, 33, 0.14), 0px 5px 22px 4px rgba(20, 21, 33, 0.12)',
		'0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 13px 19px 2px rgba(20, 21, 33, 0.14), 0px 5px 24px 4px rgba(20, 21, 33, 0.12)',
		'0px 7px 9px -4px rgba(20, 21, 33, 0.2), 0px 14px 21px 2px rgba(20, 21, 33, 0.14), 0px 5px 26px 4px rgba(20, 21, 33, 0.12)',
		'0px 8px 9px -5px rgba(20, 21, 33, 0.2), 0px 15px 22px 2px rgba(20, 21, 33, 0.14), 0px 6px 28px 5px rgba(20, 21, 33, 0.12)',
		'0px 8px 10px -5px rgba(20, 21, 33, 0.2), 0px 16px 24px 2px rgba(20, 21, 33, 0.14), 0px 6px 30px 5px rgba(20, 21, 33, 0.12)',
		'0px 8px 11px -5px rgba(20, 21, 33, 0.2), 0px 17px 26px 2px rgba(20, 21, 33, 0.14), 0px 6px 32px 5px rgba(20, 21, 33, 0.12)',
		'0px 9px 11px -5px rgba(20, 21, 33, 0.2), 0px 18px 28px 2px rgba(20, 21, 33, 0.14), 0px 7px 34px 6px rgba(20, 21, 33, 0.12)',
		'0px 9px 12px -6px rgba(20, 21, 33, 0.2), 0px 19px 29px 2px rgba(20, 21, 33, 0.14), 0px 7px 36px 6px rgba(20, 21, 33, 0.12)',
		'0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 20px 31px 3px rgba(20, 21, 33, 0.14), 0px 8px 38px 7px rgba(20, 21, 33, 0.12)',
		'0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 21px 33px 3px rgba(20, 21, 33, 0.14), 0px 8px 40px 7px rgba(20, 21, 33, 0.12)',
		'0px 10px 14px -6px rgba(20, 21, 33, 0.2), 0px 22px 35px 3px rgba(20, 21, 33, 0.14), 0px 8px 42px 7px rgba(20, 21, 33, 0.12)',
		'0px 11px 14px -7px rgba(20, 21, 33, 0.2), 0px 23px 36px 3px rgba(20, 21, 33, 0.14), 0px 9px 44px 8px rgba(20, 21, 33, 0.12)',
		'0px 11px 15px -7px rgba(20, 21, 33, 0.2), 0px 24px 38px 3px rgba(20, 21, 33, 0.14), 0px 9px 46px 8px rgba(20, 21, 33, 0.12)'
	],
	mixins: { toolbar: { minHeight: 64 } },
	transitions: {
		easing: {
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
		},
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195
		}
	},
	zIndex: {
		mobileStepper: 1000,
		fab: 1050,
		speedDial: 1050,
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500
	}
}

export let theme = createTheme(themeOptions)

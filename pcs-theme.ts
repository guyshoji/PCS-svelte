
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pcsTheme: CustomThemeConfig = {
    name: 'pcs-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a356f0 
		"--color-primary-50": "241 230 253", // #f1e6fd
		"--color-primary-100": "237 221 252", // #edddfc
		"--color-primary-200": "232 213 251", // #e8d5fb
		"--color-primary-300": "218 187 249", // #dabbf9
		"--color-primary-400": "205 79 255", // #bf89f5
		"--color-primary-500": "163 86 240", // #a356f0
		"--color-primary-600": "147 77 216", // #934dd8
		"--color-primary-700": "122 65 180", // #7a41b4
		"--color-primary-800": "98 52 144", // #623490
		"--color-primary-900": "80 42 118", // #502a76
		// secondary | #380070 
		"--color-secondary-50": "225 217 234", // #e1d9ea
		"--color-secondary-100": "215 204 226", // #d7cce2
		"--color-secondary-200": "205 191 219", // #cdbfdb
		"--color-secondary-300": "175 153 198", // #af99c6
		"--color-secondary-400": "116 77 155", // #744d9b
		"--color-secondary-500": "56 0 112", // #380070
		"--color-secondary-600": "50 0 101", // #320065
		"--color-secondary-700": "42 0 84", // #2a0054
		"--color-secondary-800": "34 0 67", // #220043
		"--color-secondary-900": "27 0 55", // #1b0037
		// tertiary | #000000 
		"--color-tertiary-50": "217 217 217", // #d9d9d9
		"--color-tertiary-100": "204 204 204", // #cccccc
		"--color-tertiary-200": "191 191 191", // #bfbfbf
		"--color-tertiary-300": "153 153 153", // #999999
		"--color-tertiary-400": "77 77 77", // #4d4d4d
		"--color-tertiary-500": "0 0 0", // #000000
		"--color-tertiary-600": "0 0 0", // #000000
		"--color-tertiary-700": "0 0 0", // #000000
		"--color-tertiary-800": "0 0 0", // #000000
		"--color-tertiary-900": "0 0 0", // #000000
		// success | #d0b716 
		"--color-success-50": "248 244 220", // #f8f4dc
		"--color-success-100": "246 241 208", // #f6f1d0
		"--color-success-200": "243 237 197", // #f3edc5
		"--color-success-300": "236 226 162", // #ece2a2
		"--color-success-400": "222 205 92", // #decd5c
		"--color-success-500": "208 183 22", // #d0b716
		"--color-success-600": "187 165 20", // #bba514
		"--color-success-700": "156 137 17", // #9c8911
		"--color-success-800": "21 78 20", // #7d6e0d
		"--color-success-900": "102 90 11", // #665a0b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #0a000f 
		"--color-surface-50": "218 217 219", // #dad9db
		"--color-surface-100": "206 204 207", // #cecccf
		"--color-surface-200": "194 191 195", // #c2bfc3
		"--color-surface-300": "157 153 159", // #9d999f
		"--color-surface-400": "40 33 40", // #544d57
		"--color-surface-500": "32 24 32", // #0a000f
		"--color-surface-600": "25 20 25", // #09000e
		"--color-surface-700": "8 0 11", // #08000b
		"--color-surface-800": "6 0 9", // #060009
		"--color-surface-900": "5 0 7", // #050007		
	}
}
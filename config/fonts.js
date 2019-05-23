module.exports = {
	formats: 'local woff',
	display: "swap",
	custom: {
		"GothamPro": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/Light/GothamPro-Light.woff",
						}
					},
					500: {
						url: {
							woff: "../fonts/Reg/GothamPro.woff",
						}
					},
					700: {
						url: {
							woff: "../fonts/Bold/GothamPro-Bold.woff",
						}
					}
				}
			}
		},
	}
}
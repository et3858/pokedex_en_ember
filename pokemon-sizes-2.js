
var sizes = [

// Unidades                            pies    metros          libras  kilogramos

{id: 001,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [15.2, 6.9],},],},
{id: 002,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [28.7, 13.0],},],},
{id: 003,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [220.5, 100.0],},],
		megaDimensiones:	[{altura: ["7′6″", 2.29],	peso: [342.8, 155.5], descripcion: "Mega Venusaur", cod: '003-m'},],},
{id: 004,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [18.7, 8.5],},],},
{id: 005,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [41.9, 19.0],},],},
{id: 006,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [199.5, 90.5],},],
		megaDimensiones:	[{altura: ["5′7″", 1.70],	peso: [243.6, 110.5], descripcion: "Mega Charizard X", cod: '006-mx'},
							 {altura: ["5′7″", 1.70],	peso: [221.6, 100.5], descripcion: "Mega Charizard Y", cod: '006-my'},],},
{id: 007,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [19.8, 9.0],},],},
{id: 008,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [49.6, 22.5],},],},
{id: 009,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [188.5, 85.5],},],
		megaDimensiones:	[{altura: ["5′3″", 1.60],	peso: [222.9, 101.1], descripcion: "Mega Blastoise", cod: '009-m'},],},
{id: 010,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [6.4, 2.9],},],},
{id: 011,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [21.8, 9.9],},],},
{id: 012,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [70.5, 32.0],},],},
{id: 013,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [7.1, 3.2],},],},
{id: 014,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [22, 10.0],},],},
{id: 015,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [65, 29.5],},],
		megaDimensiones:	[{altura: ["4′7″", 1.40],	peso: [89.3, 40.5], descripcion: "Mega Beedrill", cod: '015-m'},],},
{id: 016,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4, 1.8],},],},
{id: 017,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [66.1, 30.0],},],},
{id: 018,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [87.1, 39.5],},],
		megaDimensiones:	[{altura: ["7′3″", 2.21],	peso: [111.3, 50.5], descripcion: "Mega Pidgeot", cod: '018-m'},],},
{id: 019,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [7.7, 3.5],},],},
{id: 020,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [40.8, 18.5],},],},
{id: 021,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.4, 2.0],},],},
{id: 022,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [83.8, 38.0],},],},
{id: 023,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [15.2, 6.9],},],},
{id: 024,	dimensiones:	[{altura: ["11′6″", 3.51],	peso: [143.3, 65.0],},],},
{id: 025,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [13.2, 6.0],},],},
{id: 026,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [66.1, 30.0],},],},
{id: 027,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [26.5, 12.0],},],},
{id: 028,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [65, 29.5],},],},
{id: 029,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [15.4, 7.0],},],},
{id: 030,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [44.1, 20.0],},],},
{id: 031,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [132.3, 60.0],},],},
{id: 032,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [19.8, 9.0],},],},
{id: 033,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [43, 19.5],},],},
{id: 034,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [136.7, 62.0],},],},
{id: 035,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [16.5, 7.5],},],},
{id: 036,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [88.2, 40.0],},],},
{id: 037,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [21.8, 9.9],},],},
{id: 038,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [43.9, 19.9],},],},
{id: 039,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [12.1, 5.5],},],},
{id: 040,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [26.5, 12.0],},],},
{id: 041,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [16.5, 7.5],},],},
{id: 042,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [121.3, 55.0],},],},
{id: 043,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [11.9, 5.4],},],},
{id: 044,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [19, 8.6],},],},
{id: 045,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [41, 18.6],},],},
{id: 046,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [11.9, 5.4],},],},
{id: 047,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [65, 29.5],},],},
{id: 048,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [66.1, 30.0],},],},
{id: 049,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [27.6, 12.5],},],},
{id: 050,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [1.8, 0.8],},],},
{id: 051,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [73.4, 33.3],},],},
{id: 052,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [9.3, 4.2],},],},
{id: 053,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [70.5, 32.0],},],},
{id: 054,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [43.2, 19.6],},],},
{id: 055,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [168.9, 76.6],},],},
{id: 056,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [61.7, 28.0],},],},
{id: 057,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [70.5, 32.0],},],},
{id: 058,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [41.9, 19.0],},],},
{id: 059,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [341.7, 155.0],},],},
{id: 060,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [27.3, 12.4],},],},
{id: 061,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [44.1, 20.0],},],},
{id: 062,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [119, 54.0],},],},
{id: 063,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [43, 19.5],},],},
{id: 064,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [124.6, 56.5],},],},
{id: 065,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [105.8, 48.0],},],
		megaDimensiones:	[{altura: ["3′11″", 1.19],	peso: [105.8, 48.0], descripcion: "Mega Alakazam", cod: '065-m'},],},
{id: 066,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [43, 19.5],},],},
{id: 067,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [155.4, 70.5],},],},
{id: 068,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [286.6, 130.0],},],},
{id: 069,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [8.8, 4.0],},],},
{id: 070,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [14.1, 6.4],},],},
{id: 071,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [34.2, 15.5],},],},
{id: 072,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [100.3, 45.5],},],},
{id: 073,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [121.3, 55.0],},],},
{id: 074,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [44.1, 20.0],},],},
{id: 075,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [231.5, 105.0],},],},
{id: 076,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [661.4, 300.0],},],},
{id: 077,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [66.1, 30.0],},],},
{id: 078,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [209.4, 95.0],},],},
{id: 079,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [79.4, 36.0],},],},
{id: 080,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [173.1, 78.5],},],
		megaDimensiones:	[{altura: ["6′7″", 2.01],	peso: [264.6, 120.0], descripcion: "Mega Slowbro", cod: '080-m'},],},
{id: 081,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [13.2, 6.0],},],},
{id: 082,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [132.3, 60.0],},],},
{id: 083,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [33.1, 15.0],},],},
{id: 084,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [86.4, 39.2],},],},
{id: 085,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [187.8, 85.2],},],},
{id: 086,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [198.4, 90.0],},],},
{id: 087,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [264.6, 120.0],},],},
{id: 088,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [66.1, 30.0],},],},
{id: 089,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [66.1, 30.0],},],},
{id: 090,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [8.8, 4.0],},],},
{id: 091,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [292.1, 132.5],},],},
{id: 092,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [0.2, 0.1],},],},
{id: 093,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [0.2, 0.1],},],},
{id: 094,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [89.3, 40.5],},],
		megaDimensiones:	[{altura: ["4′7″", 1.40],	peso: [89.3, 40.5], descripcion: "Mega Gengar", cod: '094-m'},],},
{id: 095,	dimensiones:	[{altura: ["28′10″", 8.79],	peso: [463, 210.0],},],},
{id: 096,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [71.4, 32.4],},],},
{id: 097,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [166.7, 75.6],},],},
{id: 098,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [14.3, 6.5],},],},
{id: 099,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [132.3, 60.0],},],},
{id: 100,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [22.9, 10.4],},],},
{id: 101,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [146.8, 66.6],},],},
{id: 102,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [5.5, 2.5],},],},
{id: 103,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [264.6, 120.0],},],},
{id: 104,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [14.3, 6.5],},],},
{id: 105,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [99.2, 45.0],},],},
{id: 106,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [109.8, 49.8],},],},
{id: 107,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [110.7, 50.2],},],},
{id: 108,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [144.4, 65.5],},],},
{id: 109,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [2.2, 1.0],},],},
{id: 110,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [20.9, 9.5],},],},
{id: 111,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [253.5, 115.0],},],},
{id: 112,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [264.6, 120.0],},],},
{id: 113,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [76.3, 34.6],},],},
{id: 114,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [77.2, 35.0],},],},
{id: 115,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [176.4, 80.0],},],
		megaDimensiones:	[{altura: ["7′3″", 2.21],	peso: [220.5, 100.0], descripcion: "Mega Kangaskhan", cod: '115-m'},],},
{id: 116,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [17.6, 8.0],},],},
{id: 117,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [55.1, 25.0],},],},
{id: 118,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [33.1, 15.0],},],},
{id: 119,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [86, 39.0],},],},
{id: 120,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [76.1, 34.5],},],},
{id: 121,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [176.4, 80.0],},],},
{id: 122,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [120.2, 54.5],},],},
{id: 123,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [123.5, 56.0],},],},
{id: 124,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [89.5, 40.6],},],},
{id: 125,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [66.1, 30.0],},],},
{id: 126,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [98.1, 44.5],},],},
{id: 127,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [121.3, 55.0],},],
		megaDimensiones:	[{altura: ["5′7″", 1.70],	peso: [130.1, 59.0], descripcion: "Mega Pinsir", cod: '127-m'},],},
{id: 128,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [194.9, 88.4],},],},
{id: 129,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [22, 10.0],},],},
{id: 130,	dimensiones:	[{altura: ["21′4″", 6.50],	peso: [518.1, 235.0],},],
		megaDimensiones:	[{altura: ["21′4″", 6.50],	peso: [672.4, 305.0], descripcion: "Mega Gyarados", cod: '130-m'},],},
{id: 131,	dimensiones:	[{altura: ["8′2″", 2.49],	peso: [485, 220.0],},],},
{id: 132,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [8.8, 4.0],},],},
{id: 133,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [14.3, 6.5],},],},
{id: 134,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [63.9, 29.0],},],},
{id: 135,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [54, 24.5],},],},
{id: 136,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [55.1, 25.0],},],},
{id: 137,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [80.5, 36.5],},],},
{id: 138,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [16.5, 7.5],},],},
{id: 139,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [77.2, 35.0],},],},
{id: 140,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [25.4, 11.5],},],},
{id: 141,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [89.3, 40.5],},],},
{id: 142,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [130.1, 59.0],},],
		megaDimensiones:	[{altura: ["6′11″", 2.11],	peso: [174.2, 79.0], descripcion: "Mega Aerodactyl", cod: '142-m'},],},
{id: 143,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [1014.1, 460.0],},],},
{id: 144,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [122.1, 55.4],},],},
{id: 145,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [116, 52.6],},],},
{id: 146,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [132.3, 60.0],},],},
{id: 147,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [7.3, 3.3],},],},
{id: 148,	dimensiones:	[{altura: ["13′1″", 3.99],	peso: [36.4, 16.5],},],},
{id: 149,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [463, 210.0],},],},
{id: 150,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [269, 122.0],},],
		megaDimensiones:	[{altura: ["7′7″", 2.31],	peso: [280, 127.0], descripcion: "Mega Mewtwo X", cod: '150-mx'},
							 {altura: ["4′11″", 1.50],	peso: [72.8, 33.0], descripcion: "Mega Mewtwo Y", cod: '150-my'},],},
{id: 151,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [8.8, 4.0],},],},
{id: 152,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [14.1, 6.4],},],},
{id: 153,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [34.8, 15.8],},],},
{id: 154,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [221.6, 100.5],},],},
{id: 155,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [17.4, 7.9],},],},
{id: 156,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [41.9, 19.0],},],},
{id: 157,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [175.3, 79.5],},],},
{id: 158,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [20.9, 9.5],},],},
{id: 159,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [55.1, 25.0],},],},
{id: 160,	dimensiones:	[{altura: ["7′7″", 2.31],	peso: [195.8, 88.8],},],},
{id: 161,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [13.2, 6.0],},],},
{id: 162,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [71.7, 32.5],},],},
{id: 163,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [46.7, 21.2],},],},
{id: 164,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [89.9, 40.8],},],},
{id: 165,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [23.8, 10.8],},],},
{id: 166,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [78.5, 35.6],},],},
{id: 167,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [18.7, 8.5],},],},
{id: 168,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [73.9, 33.5],},],},
{id: 169,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [165.3, 75.0],},],},
{id: 170,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [26.5, 12.0],},],},
{id: 171,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [49.6, 22.5],},],},
{id: 172,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.4, 2.0],},],},
{id: 173,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [6.6, 3.0],},],},
{id: 174,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [2.2, 1.0],},],},
{id: 175,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [3.3, 1.5],},],},
{id: 176,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [7.1, 3.2],},],},
{id: 177,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [4.4, 2.0],},],},
{id: 178,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [33.1, 15.0],},],},
{id: 179,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [17.2, 7.8],},],},
{id: 180,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [29.3, 13.3],},],},
{id: 181,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [135.6, 61.5],},],
		megaDimensiones:	[{altura: ["4′7″", 1.40],	peso: [135.6, 61.5], descripcion: "Mega Ampharos", cod: '181-m'},],},
{id: 182,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [12.8, 5.8],},],},
{id: 183,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [18.7, 8.5],},],},
{id: 184,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [62.8, 28.5],},],},
{id: 185,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [83.8, 38.0],},],},
{id: 186,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [74.7, 33.9],},],},
{id: 187,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [1.1, 0.5],},],},
{id: 188,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [2.2, 1.0],},],},
{id: 189,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [6.6, 3.0],},],},
{id: 190,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [25.4, 11.5],},],},
{id: 191,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4, 1.8],},],},
{id: 192,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [18.7, 8.5],},],},
{id: 193,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [83.8, 38.0],},],},
{id: 194,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [18.7, 8.5],},],},
{id: 195,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [165.3, 75.0],},],},
{id: 196,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [58.4, 26.5],},],},
{id: 197,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [59.5, 27.0],},],},
{id: 198,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [4.6, 2.1],},],},
{id: 199,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [175.3, 79.5],},],},
{id: 200,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [2.2, 1.0],},],},
{id: 201,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [11, 5.0],},],},
{id: 202,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [62.8, 28.5],},],},
{id: 203,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [91.5, 41.5],},],},
{id: 204,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [15.9, 7.2],},],},
{id: 205,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [277.3, 125.8],},],},
{id: 206,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [30.9, 14.0],},],},
{id: 207,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [142.9, 64.8],},],},
{id: 208,	dimensiones:	[{altura: ["30′2″", 9.19],	peso: [881.8, 400.0],},],
		megaDimensiones:	[{altura: ["34′5″", 10.49],	peso: [1631.4, 740.0], descripcion: "Mega Steelix", cod: '208-m'},],},
{id: 209,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [17.2, 7.8],},],},
{id: 210,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [107.4, 48.7],},],},
{id: 211,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [8.6, 3.9],},],},
{id: 212,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [260.1, 118.0],},],
		megaDimensiones:	[{altura: ["6′7″", 2.01],	peso: [275.6, 125.0], descripcion: "Mega Scizor", cod: '212-m'},],},
{id: 213,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [45.2, 20.5],},],},
{id: 214,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [119, 54.0],},],
		megaDimensiones:	[{altura: ["5′7″", 1.70],	peso: [137.8, 62.5], descripcion: "Mega Heracross", cod: '214-m'},],},
{id: 215,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [61.7, 28.0],},],},
{id: 216,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [19.4, 8.8],},],},
{id: 217,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [277.3, 125.8],},],},
{id: 218,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [77.2, 35.0],},],},
{id: 219,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [121.3, 55.0],},],},
{id: 220,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [14.3, 6.5],},],},
{id: 221,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [123, 55.8],},],},
{id: 222,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [11, 5.0],},],},
{id: 223,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [26.5, 12.0],},],},
{id: 224,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [62.8, 28.5],},],},
{id: 225,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [35.3, 16.0],},],},
{id: 226,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [485, 220.0],},],},
{id: 227,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [111.3, 50.5],},],},
{id: 228,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [23.8, 10.8],},],},
{id: 229,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [77.2, 35.0],},],
		megaDimensiones:	[{altura: ["6′3″", 1.91],	peso: [109.1, 49.5], descripcion: "Mega Houndoom", cod: '229-m'},],},
{id: 230,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [335.1, 152.0],},],},
{id: 231,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [73.9, 33.5],},],},
{id: 232,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [264.6, 120.0],},],},
{id: 233,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [71.7, 32.5],},],},
{id: 234,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [157, 71.2],},],},
{id: 235,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [127.9, 58.0],},],},
{id: 236,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [46.3, 21.0],},],},
{id: 237,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [105.8, 48.0],},],},
{id: 238,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [13.2, 6.0],},],},
{id: 239,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [51.8, 23.5],},],},
{id: 240,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [47.2, 21.4],},],},
{id: 241,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [166.4, 75.5],},],},
{id: 242,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [103.2, 46.8],},],},
{id: 243,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [392.4, 178.0],},],},
{id: 244,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [436.5, 198.0],},],},
{id: 245,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [412.3, 187.0],},],},
{id: 246,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [158.7, 72.0],},],},
{id: 247,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [335.1, 152.0],},],},
{id: 248,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [445.3, 202.0],},],
		megaDimensiones:	[{altura: ["8′2″", 2.49],	peso: [562.2, 255.0], descripcion: "Mega Tyranitar", cod: '248-m'},],},
{id: 249,	dimensiones:	[{altura: ["17′1″", 5.21],	peso: [476.2, 216.0],},],},
{id: 250,	dimensiones:	[{altura: ["12′6″", 3.81],	peso: [438.7, 199.0],},],},
{id: 251,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [11, 5.0],},],},
{id: 252,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [11, 5.0],},],},
{id: 253,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [47.6, 21.6],},],},
{id: 254,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [115.1, 52.2],},],
		megaDimensiones:	[{altura: ["6′3″", 1.91],	peso: [121.7, 55.2], descripcion: "Mega Sceptile", cod: '254-m'},],},
{id: 255,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [5.5, 2.5],},],},
{id: 256,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [43, 19.5],},],},
{id: 257,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [114.6, 52.0],},],
		megaDimensiones:	[{altura: ["6′3″", 1.91],	peso: [114.6, 52.0], descripcion: "Mega Blaziken", cod: '257-m'},],},
{id: 258,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [16.8, 7.6],},],},
{id: 259,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [61.7, 28.0],},],},
{id: 260,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [180.6, 81.9],},],
		megaDimensiones:	[{altura: ["6′3″", 1.91],	peso: [224.9, 102.0], descripcion: "Mega Swampert", cod: '260-m'},],},
{id: 261,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [30, 13.6],},],},
{id: 262,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [81.6, 37.0],},],},
{id: 263,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [38.6, 17.5],},],},
{id: 264,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [71.7, 32.5],},],},
{id: 265,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [7.9, 3.6],},],},
{id: 266,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [22, 10.0],},],},
{id: 267,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [62.6, 28.4],},],},
{id: 268,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [25.4, 11.5],},],},
{id: 269,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [69.7, 31.6],},],},
{id: 270,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [5.7, 2.6],},],},
{id: 271,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [71.7, 32.5],},],},
{id: 272,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [121.3, 55.0],},],},
{id: 273,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [8.8, 4.0],},],},
{id: 274,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [61.7, 28.0],},],},
{id: 275,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [131.4, 59.6],},],},
{id: 276,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [5.1, 2.3],},],},
{id: 277,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [43.7, 19.8],},],},
{id: 278,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [20.9, 9.5],},],},
{id: 279,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [61.7, 28.0],},],},
{id: 280,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [14.6, 6.6],},],},
{id: 281,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [44.5, 20.2],},],},
{id: 282,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [106.7, 48.4],},],
		megaDimensiones:	[{altura: ["5′3″", 1.60],	peso: [106.7, 48.4], descripcion: "Mega Gardevoir", cod: '282-m'},],},
{id: 283,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [3.7, 1.7],},],},
{id: 284,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [7.9, 3.6],},],},
{id: 285,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [9.9, 4.5],},],},
{id: 286,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [86.4, 39.2],},],},
{id: 287,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [52.9, 24.0],},],},
{id: 288,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [102.5, 46.5],},],},
{id: 289,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [287.7, 130.5],},],},
{id: 290,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [12.1, 5.5],},],},
{id: 291,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [26.5, 12.0],},],},
{id: 292,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [2.6, 1.2],},],},
{id: 293,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [35.9, 16.3],},],},
{id: 294,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [89.3, 40.5],},],},
{id: 295,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [185.2, 84.0],},],},
{id: 296,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [190.5, 86.4],},],},
{id: 297,	dimensiones:	[{altura: ["7′7″", 2.31],	peso: [559.5, 253.8],},],},
{id: 298,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [4.4, 2.0],},],},
{id: 299,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [213.8, 97.0],},],},
{id: 300,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [24.3, 11.0],},],},
{id: 301,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [71.9, 32.6],},],},
{id: 302,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [24.3, 11.0],},],
		megaDimensiones:	[{altura: ["1′8″", 0.51],	peso: [354.9, 161.0], descripcion: "Mega Sableye", cod: '302-m'},],},
{id: 303,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [25.4, 11.5],},],
		megaDimensiones:	[{altura: ["3′3″", 0.99],	peso: [51.8, 23.5], descripcion: "Mega Mawile", cod: '303-m'},],},
{id: 304,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [132.3, 60.0],},],},
{id: 305,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [264.6, 120.0],},],},
{id: 306,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [793.7, 360.0],},],
		megaDimensiones:	[{altura: ["7′3″", 2.21],	peso: [870.8, 395.0], descripcion: "Mega Aggron", cod: '306-m'},],},
{id: 307,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [24.7, 11.2],},],},
{id: 308,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [69.4, 31.5],},],
		megaDimensiones:	[{altura: ["4′3″", 1.30],	peso: [69.4, 31.5], descripcion: "Mega Medicham", cod: '308-m'},],},
{id: 309,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [33.5, 15.2],},],},
{id: 310,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [88.6, 40.2],},],
		megaDimensiones:	[{altura: ["5′11″", 1.80],	peso: [97, 44.0], descripcion: "Mega Manectric", cod: '310-m'},],},
{id: 311,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [9.3, 4.2],},],},
{id: 312,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [9.3, 4.2],},],},
{id: 313,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [39, 17.7],},],},
{id: 314,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [39, 17.7],},],},
{id: 315,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.4, 2.0],},],},
{id: 316,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [22.7, 10.3],},],},
{id: 317,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [176.4, 80.0],},],},
{id: 318,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [45.9, 20.8],},],},
{id: 319,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [195.8, 88.8],},],
		megaDimensiones:	[{altura: ["8′2″", 2.49],	peso: [287.3, 130.3], descripcion: "Mega Sharpedo", cod: '319-m'},],},
{id: 320,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [286.6, 130.0],},],},
{id: 321,	dimensiones:	[{altura: ["47′7″", 14.50],	peso: [877.4, 398.0],},],},
{id: 322,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [52.9, 24.0],},],},
{id: 323,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [485, 220.0],},],
		megaDimensiones:	[{altura: ["8′2″", 2.49],	peso: [706.6, 320.5], descripcion: "Mega Camerupt", cod: '323-m'},],},
{id: 324,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [177.3, 80.4],},],},
{id: 325,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [67.5, 30.6],},],},
{id: 326,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [157.6, 71.5],},],},
{id: 327,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [11, 5.0],},],},
{id: 328,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [33.1, 15.0],},],},
{id: 329,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [33.7, 15.3],},],},
{id: 330,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [180.8, 82.0],},],},
{id: 331,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [113.1, 51.3],},],},
{id: 332,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [170.6, 77.4],},],},
{id: 333,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [2.6, 1.2],},],},
{id: 334,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [45.4, 20.6],},],
		megaDimensiones:	[{altura: ["4′11″", 1.50],	peso: [45.4, 20.6], descripcion: "Mega Altaria", cod: '334-m'},],},
{id: 335,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [88.8, 40.3],},],},
{id: 336,	dimensiones:	[{altura: ["8′10″", 2.69],	peso: [115.7, 52.5],},],},
{id: 337,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [370.4, 168.0],},],},
{id: 338,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [339.5, 154.0],},],},
{id: 339,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [4.2, 1.9],},],},
{id: 340,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [52, 23.6],},],},
{id: 341,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [25.4, 11.5],},],},
{id: 342,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [72.3, 32.8],},],},
{id: 343,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [47.4, 21.5],},],},
{id: 344,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [238.1, 108.0],},],},
{id: 345,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [52.5, 23.8],},],},
{id: 346,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [133.2, 60.4],},],},
{id: 347,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [27.6, 12.5],},],},
{id: 348,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [150.4, 68.2],},],},
{id: 349,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [16.3, 7.4],},],},
{id: 350,	dimensiones:	[{altura: ["20′4″", 6.20],	peso: [357.1, 162.0],},],},
{id: 351,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [1.8, 0.8],},],},
{id: 352,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [48.5, 22.0],},],},
{id: 353,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [5.1, 2.3],},],},
{id: 354,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [27.6, 12.5],},],
		megaDimensiones:	[{altura: ["3′11″", 1.19],	peso: [28.7, 13.0], descripcion: "Mega Banette", cod: '354-m'},],},
{id: 355,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [33.1, 15.0],},],},
{id: 356,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [67.5, 30.6],},],},
{id: 357,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [220.5, 100.0],},],},
{id: 358,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [2.2, 1.0],},],},
{id: 359,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [103.6, 47.0],},],
		megaDimensiones:	[{altura: ["3′11″", 1.19],	peso: [108, 49.0], descripcion: "Mega Absol", cod: '359-m'},],},
{id: 360,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [30.9, 14.0],},],},
{id: 361,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [37, 16.8],},],},
{id: 362,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [565.5, 256.5],},],
		megaDimensiones:	[{altura: ["6′11″", 2.11],	peso: [772.1, 350.2], descripcion: "Mega Glalie", cod: '362-m'},],},
{id: 363,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [87.1, 39.5],},],},
{id: 364,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [193.1, 87.6],},],},
{id: 365,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [332, 150.6],},],},
{id: 366,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [115.7, 52.5],},],},
{id: 367,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [59.5, 27.0],},],},
{id: 368,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [49.8, 22.6],},],},
{id: 369,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [51.6, 23.4],},],},
{id: 370,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [19.2, 8.7],},],},
{id: 371,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [92.8, 42.1],},],},
{id: 372,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [243.6, 110.5],},],},
{id: 373,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [226.2, 102.6],},],
		megaDimensiones:	[{altura: ["5′11″", 1.80],	peso: [248.2, 112.6], descripcion: "Mega Salamence", cod: '373-m'},],},
{id: 374,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [209.9, 95.2],},],},
{id: 375,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [446.4, 202.5],},],},
{id: 376,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [1212.5, 550.0],},],
		megaDimensiones:	[{altura: ["8′2″", 2.49],	peso: [2078.7, 942.9], descripcion: "Mega Metagross", cod: '376-m'},],},
{id: 377,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [507.1, 230.0],},],},
{id: 378,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [385.8, 175.0],},],},
{id: 379,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [451.9, 205.0],},],},
{id: 380,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [88.2, 40.0],},],
		megaDimensiones:	[{altura: ["5′11″", 1.80],	peso: [114.6, 52.0], descripcion: "Mega Latias", cod: '380-m'},],},
{id: 381,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [132.3, 60.0],},],
		megaDimensiones:	[{altura: ["7′7″", 2.31],	peso: [154.3, 70.0], descripcion: "Mega Latios", cod: '381-m'},],},
{id: 382,	dimensiones:	[{altura: ["14′9″", 4.50],	peso: [776, 352.0],},],
		 priDimensiones:	[{altura: ["32′1″", 9.78],	peso: [948, 430.0], descripcion: "Primal Kyogre", cod: '382-p'},],},
{id: 383,	dimensiones:	[{altura: ["11′6″", 3.51],	peso: [2094.4, 950.0],},],
		 priDimensiones:	[{altura: ["16′5″", 5.00],	peso: [2204.4, 999.9], descripcion: "Primal Groudon", cod: '383-p'},],},
{id: 384,	dimensiones:	[{altura: ["23′0″", 7.01],	peso: [455.3, 206.5],},],
		megaDimensiones:	[{altura: ["35′05″", 10.8],	peso: [864.2, 392.0], descripcion: "Mega Rayquaza", cod: '384-m'},],},
{id: 385,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [2.4, 1.1],},],},
{id: 386,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [134, 60.8],},],},
/*
{id: 386,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [134, 60.8], descripcion: "Deoxys Normal Forme"},],},
{id: 386,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [134, 60.8], descripcion: "Deoxys Attack Forme"},],},
{id: 386,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [134, 60.8], descripcion: "Deoxys Defense Forme"},],},
{id: 386,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [134, 60.8], descripcion: "Deoxys Speed Forme"},],},
*/
{id: 387,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [22.5, 10.2],},],},
{id: 388,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [213.8, 97.0],},],},
{id: 389,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [683.4, 310.0],},],},
{id: 390,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [13.7, 6.2],},],},
{id: 391,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [48.5, 22.0],},],},
{id: 392,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [121.3, 55.0],},],},
{id: 393,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [11.5, 5.2],},],},
{id: 394,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [50.7, 23.0],},],},
{id: 395,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [186.3, 84.5],},],},
{id: 396,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.4, 2.0],},],},
{id: 397,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [34.2, 15.5],},],},
{id: 398,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [54.9, 24.9],},],},
{id: 399,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [44.1, 20.0],},],},
{id: 400,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [69.4, 31.5],},],},
{id: 401,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.9, 2.2],},],},
{id: 402,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [56.2, 25.5],},],},
{id: 403,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [20.9, 9.5],},],},
{id: 404,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [67.2, 30.5],},],},
{id: 405,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [92.6, 42.0],},],},
{id: 406,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [2.6, 1.2],},],},
{id: 407,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [32, 14.5],},],},
{id: 408,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [69.4, 31.5],},],},
{id: 409,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [226, 102.5],},],},
{id: 410,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [125.7, 57.0],},],},
{id: 411,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [329.6, 149.5],},],},
{id: 412,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [7.5, 3.4],},],},
{id: 413,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [14.3, 6.5],},],},
/*
{id: 413,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [14.3, 6.5], descripcion: "Wormadam Plant Cloak"},],},
{id: 413,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [14.3, 6.5], descripcion: "Wormadam Sandy Cloak"},],},
{id: 413,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [14.3, 6.5], descripcion: "Wormadam Trash Cloak"},],},
*/
{id: 414,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [51.4, 23.3],},],},
{id: 415,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [12.1, 5.5],},],},
{id: 416,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [84.9, 38.5],},],},
{id: 417,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [8.6, 3.9],},],},
{id: 418,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [65, 29.5],},],},
{id: 419,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [73.9, 33.5],},],},
{id: 420,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [7.3, 3.3],},],},
{id: 421,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [20.5, 9.3],},],},
{id: 422,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [13.9, 6.3],},],},
{id: 423,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [65.9, 29.9],},],},
{id: 424,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [44.8, 20.3],},],},
{id: 425,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [2.6, 1.2],},],},
{id: 426,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [33.1, 15.0],},],},
{id: 427,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [12.1, 5.5],},],},
{id: 428,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [73.4, 33.3],},],
		megaDimensiones:	[{altura: ["4′3″", 1.30],	peso: [62.4, 28.3], descripcion: "Mega Lopunny", cod: '428-m'},],},
{id: 429,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [9.7, 4.4],},],},
{id: 430,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [60.2, 27.3],},],},
{id: 431,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [8.6, 3.9],},],},
{id: 432,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [96.6, 43.8],},],},
{id: 433,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [1.3, 0.6],},],},
{id: 434,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [42.3, 19.2],},],},
{id: 435,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [83.8, 38.0],},],},
{id: 436,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [133.4, 60.5],},],},
{id: 437,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [412.3, 187.0],},],},
{id: 438,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [33.1, 15.0],},],},
{id: 439,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [28.7, 13.0],},],},
{id: 440,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [53.8, 24.4],},],},
{id: 441,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [4.2, 1.9],},],},
{id: 442,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [238.1, 108.0],},],},
{id: 443,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [45.2, 20.5],},],},
{id: 444,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [123.5, 56.0],},],},
{id: 445,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [209.4, 95.0],},],
		megaDimensiones:	[{altura: ["6′3″", 1.91],	peso: [209.4, 95.0], descripcion: "Mega Garchomp", cod: '445-m'},],},
{id: 446,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [231.5, 105.0],},],},
{id: 447,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [44.5, 20.2],},],},
{id: 448,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [119, 54.0],},],
		megaDimensiones:	[{altura: ["4′3″", 1.30],	peso: [126.8, 57.5], descripcion: "Mega Lucario", cod: '448-m'},],},
{id: 449,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [109.1, 49.5],},],},
{id: 450,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [661.4, 300.0],},],},
{id: 451,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [26.5, 12.0],},],},
{id: 452,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [135.6, 61.5],},],},
{id: 453,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [50.7, 23.0],},],},
{id: 454,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [97.9, 44.4],},],},
{id: 455,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [59.5, 27.0],},],},
{id: 456,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [15.4, 7.0],},],},
{id: 457,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [52.9, 24.0],},],},
{id: 458,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [143.3, 65.0],},],},
{id: 459,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [111.3, 50.5],},],},
{id: 460,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [298.7, 135.5],},],
		megaDimensiones:	[{altura: ["8′10″", 2.69],	peso: [407.8, 185.0], descripcion: "Mega Abomasnow", cod: '460-m'},],},
{id: 461,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [75, 34.0],},],},
{id: 462,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [396.8, 180.0],},],},
{id: 463,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [308.6, 140.0],},],},
{id: 464,	dimensiones:	[{altura: ["7′10″", 2.39],	peso: [623.5, 282.8],},],},
{id: 465,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [283.5, 128.6],},],},
{id: 466,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [305.6, 138.6],},],},
{id: 467,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [149.9, 68.0],},],},
{id: 468,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [83.8, 38.0],},],},
{id: 469,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [113.5, 51.5],},],},
{id: 470,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [56.2, 25.5],},],},
{id: 471,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [57.1, 25.9],},],},
{id: 472,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [93.7, 42.5],},],},
{id: 473,	dimensiones:	[{altura: ["8′2″", 2.49],	peso: [641.5, 291.0],},],},
{id: 474,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [75, 34.0],},],},
{id: 475,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [114.6, 52.0],},],
		megaDimensiones:	[{altura: ["5′3″", 1.60],	peso: [124.3, 56.4], descripcion: "Mega Gallade", cod: '475-m'},],},
{id: 476,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [749.6, 340.0],},],},
{id: 477,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [235, 106.6],},],},
{id: 478,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [58.6, 26.6],},],},
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3],},],},
/*
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3], descripcion: "Heat Rotom"},],},
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3], descripcion: "Wash Rotom"},],},
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3], descripcion: "Frost Rotom"},],},
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3], descripcion: "Fan Rotom"},],},
{id: 479,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3], descripcion: "Mow Rotom"},],},
*/
{id: 480,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3],},],},
{id: 481,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3],},],},
{id: 482,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [0.7, 0.3],},],},
{id: 483,	dimensiones:	[{altura: ["17′9″", 5.41],	peso: [1505.8, 683.0],},],},
{id: 484,	dimensiones:	[{altura: ["13′9″", 4.19],	peso: [740.8, 336.0],},],},
{id: 485,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [948, 430.0],},],},
{id: 486,	dimensiones:	[{altura: ["12′2″", 3.71],	peso: [925.9, 420.0],},],},
{id: 487,	dimensiones:	[{altura: ["14′9″", 4.50],	peso: [1653.5, 750.0], descripcion: "Giratina Altered Forme"},
							 {altura: ["22′8″", 6.91],	peso: [1433, 650.0], descripcion: "Giratina Origin Forme", cod: '487-o'},],},
{id: 488,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [188.7, 85.6],},],},
{id: 489,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [6.8, 3.1],},],},
{id: 490,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [3.1, 1.4],},],},
{id: 491,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [111.3, 50.5],},],},
{id: 492,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [4.6, 2.1], descripcion: "Shaymin Land Forme"},
							 {altura: ["1′4″", 0.41],	peso: [11.5, 5.2], descripcion: "Shaymin Sky Forme", cod: '492-s'},],},
{id: 493,	dimensiones:	[{altura: ["10′6″", 3.20],	peso: [705.5, 320.0],},],},
{id: 494,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [8.8, 4.0],},],},
{id: 495,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [17.9, 8.1],},],},
{id: 496,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [35.3, 16.0],},],},
{id: 497,	dimensiones:	[{altura: ["10′10″", 3.30],	peso: [138.9, 63.0],},],},
{id: 498,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [21.8, 9.9],},],},
{id: 499,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [122.4, 55.5],},],},
{id: 500,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [330.7, 150.0],},],},
{id: 501,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [13, 5.9],},],},
{id: 502,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [54, 24.5],},],},
{id: 503,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [208.6, 94.6],},],},
{id: 504,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [25.6, 11.6],},],},
{id: 505,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [59.5, 27.0],},],},
{id: 506,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [9, 4.1],},],},
{id: 507,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [32.4, 14.7],},],},
{id: 508,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [134.5, 61.0],},],},
{id: 509,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [22.3, 10.1],},],},
{id: 510,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [82.7, 37.5],},],},
{id: 511,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [23.1, 10.5],},],},
{id: 512,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [67.2, 30.5],},],},
{id: 513,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [24.3, 11.0],},],},
{id: 514,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [61.7, 28.0],},],},
{id: 515,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [29.8, 13.5],},],},
{id: 516,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [63.9, 29.0],},],},
{id: 517,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [51.4, 23.3],},],},
{id: 518,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [133.4, 60.5],},],},
{id: 519,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [4.6, 2.1],},],},
{id: 520,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [33.1, 15.0],},],},
{id: 521,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [63.9, 29.0],},],},
{id: 522,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [65.7, 29.8],},],},
{id: 523,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [175.3, 79.5],},],},
{id: 524,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [39.7, 18.0],},],},
{id: 525,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [224.9, 102.0],},],},
{id: 526,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [573.2, 260.0],},],},
{id: 527,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [4.6, 2.1],},],},
{id: 528,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [23.1, 10.5],},],},
{id: 529,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [18.7, 8.5],},],},
{id: 530,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [89.1, 40.4],},],},
{id: 531,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [68.3, 31.0],},],
		megaDimensiones:	[{altura: ["4′11″", 1.50],	peso: [70.5, 32.0], descripcion: "Mega Audino", cod: '531-m'},],},
{id: 532,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [27.6, 12.5],},],},
{id: 533,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [88.2, 40.0],},],},
{id: 534,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [191.8, 87.0],},],},
{id: 535,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [9.9, 4.5],},],},
{id: 536,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [37.5, 17.0],},],},
{id: 537,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [136.7, 62.0],},],},
{id: 538,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [122.4, 55.5],},],},
{id: 539,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [112.4, 51.0],},],},
{id: 540,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [5.5, 2.5],},],},
{id: 541,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [16.1, 7.3],},],},
{id: 542,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [45.2, 20.5],},],},
{id: 543,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [11.7, 5.3],},],},
{id: 544,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [129, 58.5],},],},
{id: 545,	dimensiones:	[{altura: ["8′2″", 2.49],	peso: [442, 200.5],},],},
{id: 546,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [1.3, 0.6],},],},
{id: 547,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [14.6, 6.6],},],},
{id: 548,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [14.6, 6.6],},],},
{id: 549,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [35.9, 16.3],},],},
{id: 550,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [39.7, 18.0],},],},
{id: 551,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [33.5, 15.2],},],},
{id: 552,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [73.6, 33.4],},],},
{id: 553,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [212.3, 96.3],},],},
{id: 554,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [82.7, 37.5],},],},
{id: 555,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [204.8, 92.9],},],},
/*
{id: 555,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [204.8, 92.9], descripcion: "Darmanitan Standard Mode"},],},
{id: 555,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [204.8, 92.9], descripcion: "Darmanitan Zen Mode"},],},
*/
{id: 556,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [61.7, 28.0],},],},
{id: 557,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [32, 14.5],},],},
{id: 558,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [440.9, 200.0],},],},
{id: 559,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [26, 11.8],},],},
{id: 560,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [66.1, 30.0],},],},
{id: 561,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [30.9, 14.0],},],},
{id: 562,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [3.3, 1.5],},],},
{id: 563,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [168.7, 76.5],},],},
{id: 564,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [36.4, 16.5],},],},
{id: 565,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [178.6, 81.0],},],},
{id: 566,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [20.9, 9.5],},],},
{id: 567,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [70.5, 32.0],},],},
{id: 568,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [68.3, 31.0],},],},
{id: 569,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [236.6, 107.3],},],},
{id: 570,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [27.6, 12.5],},],},
{id: 571,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [178.8, 81.1],},],},
{id: 572,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [12.8, 5.8],},],},
{id: 573,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [16.5, 7.5],},],},
{id: 574,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [12.8, 5.8],},],},
{id: 575,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [39.7, 18.0],},],},
{id: 576,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [97, 44.0],},],},
{id: 577,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [2.2, 1.0],},],},
{id: 578,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [17.6, 8.0],},],},
{id: 579,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [44.3, 20.1],},],},
{id: 580,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [12.1, 5.5],},],},
{id: 581,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [53.4, 24.2],},],},
{id: 582,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [12.6, 5.7],},],},
{id: 583,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [90.4, 41.0],},],},
{id: 584,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [126.8, 57.5],},],},
{id: 585,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [43, 19.5],},],},
{id: 586,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [203.9, 92.5],},],},
{id: 587,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [11, 5.0],},],},
{id: 588,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [13, 5.9],},],},
{id: 589,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [72.8, 33.0],},],},
{id: 590,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [2.2, 1.0],},],},
{id: 591,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [23.1, 10.5],},],},
{id: 592,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [72.8, 33.0],},],},
{id: 593,	dimensiones:	[{altura: ["7′3″", 2.21],	peso: [297.6, 135.0],},],},
{id: 594,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [69.7, 31.6],},],},
{id: 595,	dimensiones:	[{altura: ["0′4″", 0.10],	peso: [1.3, 0.6],},],},
{id: 596,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [31.5, 14.3],},],},
{id: 597,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [41.4, 18.8],},],},
{id: 598,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [242.5, 110.0],},],},
{id: 599,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [46.3, 21.0],},],},
{id: 600,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [112.4, 51.0],},],},
{id: 601,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [178.6, 81.0],},],},
{id: 602,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [0.7, 0.3],},],},
{id: 603,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [48.5, 22.0],},],},
{id: 604,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [177.5, 80.5],},],},
{id: 605,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [19.8, 9.0],},],},
{id: 606,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [76.1, 34.5],},],},
{id: 607,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [6.8, 3.1],},],},
{id: 608,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [28.7, 13.0],},],},
{id: 609,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [75.6, 34.3],},],},
{id: 610,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [39.7, 18.0],},],},
{id: 611,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [79.4, 36.0],},],},
{id: 612,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [232.6, 105.5],},],},
{id: 613,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [18.7, 8.5],},],},
{id: 614,	dimensiones:	[{altura: ["8′6″", 2.59],	peso: [573.2, 260.0],},],},
{id: 615,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [326.3, 148.0],},],},
{id: 616,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [17, 7.7],},],},
{id: 617,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [55.8, 25.3],},],},
{id: 618,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [24.3, 11.0],},],},
{id: 619,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [44.1, 20.0],},],},
{id: 620,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [78.3, 35.5],},],},
{id: 621,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [306.4, 139.0],},],},
{id: 622,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [202.8, 92.0],},],},
{id: 623,	dimensiones:	[{altura: ["9′2″", 2.79],	peso: [727.5, 330.0],},],},
{id: 624,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [22.5, 10.2],},],},
{id: 625,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [154.3, 70.0],},],},
{id: 626,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [208.6, 94.6],},],},
{id: 627,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [23.1, 10.5],},],},
{id: 628,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [90.4, 41.0],},],},
{id: 629,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [19.8, 9.0],},],},
{id: 630,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [87.1, 39.5],},],},
{id: 631,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [127.9, 58.0],},],},
{id: 632,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [72.8, 33.0],},],},
{id: 633,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [38.1, 17.3],},],},
{id: 634,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [110.2, 50.0],},],},
{id: 635,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [352.7, 160.0],},],},
{id: 636,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [63.5, 28.8],},],},
{id: 637,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [101.4, 46.0],},],},
{id: 638,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [551.2, 250.0],},],},
{id: 639,	dimensiones:	[{altura: ["6′3″", 1.91],	peso: [573.2, 260.0],},],},
{id: 640,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [440.9, 200.0],},],},
{id: 641,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [138.9, 63.0], descripcion: " Tornadus Incarnate Forme"},
							 {altura: ["4′7″", 1.40],	peso: [138.9, 63.0], descripcion: " Tornadus Therian Forme", cod: '641-t'},],},
{id: 642,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [134.5, 61.0], descripcion: " Thundurus Incarnate Forme"},
							 {altura: ["9′10″", 3.00],	peso: [134.5, 61.0], descripcion: " Thundurus Therian Forme", cod: '642-t'},],},
{id: 643,	dimensiones:	[{altura: ["10′6″", 3.20],	peso: [727.5, 330.0],},],},
{id: 644,	dimensiones:	[{altura: ["9′6″", 2.90],	peso: [760.6, 345.0],},],},
{id: 645,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [149.9, 68.0], descripcion: " Landorus Incarnate Forme"},
							 {altura: ["4′3″", 1.30],	peso: [149.9, 68.0], descripcion: " Landorus Therian Forme", cod: '645-t'},],},
{id: 646,	dimensiones:	[{altura: ["9′10″", 3.00],	peso: [716.5, 325.0], descripcion: "Kyurem"},
							 {altura: ["10′10″", 3.30],	peso: [716.5, 325.0], descripcion: "Black Kyurem", cod: '646-b'},
							 {altura: ["11′10″", 3.61],	peso: [716.5, 325.0], descripcion: "White Kyurem", cod: '646-w'},],},
{id: 647,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [106.9, 48.5],},],},
/*
{id: 647,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [106.9, 48.5], descripcion: "Keldeo Ordinary Forme"},],},
{id: 647,	dimensiones:	[{altura: ["4′7″", 1.40],	peso: [106.9, 48.5], descripcion: "Keldeo Resolute Forme"},],},
*/
{id: 648,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [14.3, 6.5],},],},
/*
{id: 648,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [14.3, 6.5], descripcion: "Meloetta Aria Forme"},],},
{id: 648,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [14.3, 6.5], descripcion: "Meloetta Pirouette Forme"},],},
*/
{id: 649,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [181.9, 82.5],},],},
{id: 650,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [19.8, 9.0],},],},
{id: 651,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [63.9, 29.0],},],},
{id: 652,	dimensiones:	[{altura: ["5′3″", 1.60],	peso: [198.4, 90.0],},],},
{id: 653,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [20.7, 9.4],},],},
{id: 654,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [32, 14.5],},],},
{id: 655,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [86, 39.0],},],},
{id: 656,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [15.4, 7.0],},],},
{id: 657,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [24, 10.9],},],},
{id: 658,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [88.2, 40.0],},],},
{id: 659,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [11, 5.0],},],},
{id: 660,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [93.5, 42.4],},],},
{id: 661,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [3.7, 1.7],},],},
{id: 662,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [35.3, 16.0],},],},
{id: 663,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [54, 24.5],},],},
{id: 664,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [5.5, 2.5],},],},
{id: 665,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [18.5, 8.4],},],},
{id: 666,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [37.5, 17.0],},],},
{id: 667,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [29.8, 13.5],},],},
{id: 668,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [179.7, 81.5],},],},
{id: 669,	dimensiones:	[{altura: ["0′4″", 0.10],	peso: [0.2, 0.1],},],},
{id: 670,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [2, 0.9],},],},
{id: 671,	dimensiones:	[{altura: ["3′7″", 1.09],	peso: [22, 10.0],},],},
{id: 672,	dimensiones:	[{altura: ["2′11″", 0.89],	peso: [68.3, 31.0],},],},
{id: 673,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [200.6, 91.0],},],},
{id: 674,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [17.6, 8.0],},],},
{id: 675,	dimensiones:	[{altura: ["6′11″", 2.11],	peso: [299.8, 136.0],},],},
{id: 676,	dimensiones:	[{altura: ["3′11″", 1.19],	peso: [61.7, 28.0],},],},
{id: 677,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [7.7, 3.5],},],},
{id: 678,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [18.7, 8.5],},],},
/*
{id: 678,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [18.7, 8.5], descripcion: "Male"},],},
{id: 678,	dimensiones:	[{altura: ["2′0″", 0.61],	peso: [18.7, 8.5], descripcion: "Female"},],},
*/
{id: 679,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [4.4, 2.0],},],},
{id: 680,	dimensiones:	[{altura: ["2′9″", 0.84],	peso: [9.9, 4.5],},],},
{id: 681,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [116.8, 53.0],},],},
/*
{id: 681,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [116.8, 53.0], descripcion: "Blade Forme"},],},
{id: 681,	dimensiones:	[{altura: ["5′7″", 1.70],	peso: [116.8, 53.0], descripcion: "Shield Forme"},],},
*/
{id: 682,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [1.1, 0.5],},],},
{id: 683,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [34.2, 15.5],},],},
{id: 684,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [7.7, 3.5],},],},
{id: 685,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [11, 5.0],},],},
{id: 686,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [7.7, 3.5],},],},
{id: 687,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [103.6, 47.0],},],},
{id: 688,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [68.3, 31.0],},],},
{id: 689,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [211.6, 96.0],},],},
{id: 690,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [16.1, 7.3],},],},
{id: 691,	dimensiones:	[{altura: ["5′11″", 1.80],	peso: [179.7, 81.5],},],},
{id: 692,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [18.3, 8.3],},],},
{id: 693,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [77.8, 35.3],},],},
{id: 694,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [13.2, 6.0],},],},
{id: 695,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [46.3, 21.0],},],},
{id: 696,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [57.3, 26.0],},],},
{id: 697,	dimensiones:	[{altura: ["8′2″", 2.49],	peso: [595.2, 270.0],},],},
{id: 698,	dimensiones:	[{altura: ["4′3″", 1.30],	peso: [55.6, 25.2],},],},
{id: 699,	dimensiones:	[{altura: ["8′10″", 2.69],	peso: [496, 225.0],},],},
{id: 700,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [51.8, 23.5],},],},
{id: 701,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [47.4, 21.5],},],},
{id: 702,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [4.9, 2.2],},],},
{id: 703,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [12.6, 5.7],},],},
{id: 704,	dimensiones:	[{altura: ["1′0″", 0.30],	peso: [6.2, 2.8],},],},
{id: 705,	dimensiones:	[{altura: ["2′7″", 0.79],	peso: [38.6, 17.5],},],},
{id: 706,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [331.8, 150.5],},],},
{id: 707,	dimensiones:	[{altura: ["0′8″", 0.20],	peso: [6.6, 3.0],},],},
{id: 708,	dimensiones:	[{altura: ["1′4″", 0.41],	peso: [15.4, 7.0],},],},
{id: 709,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [156.5, 71.0],},],},
{id: 710,	dimensiones:	[{altura: ["1′04″", 0.41],	peso: [11, 5.0], descripcion: "Average Size"},
							 {altura: ["1′0″", 0.31],	peso: [7.7, 3.5], descripcion: "Small Size", cod: '710-s'},
							 {altura: ["1′08″", 0.51],	peso: [16.5, 7.5], descripcion: "Large Size", cod: '710-l'},
							 {altura: ["2′07″", 0.81],	peso: [31.1, 15.0], descripcion: "Super Size", cod: '710-x'},],},
{id: 711,	dimensiones:	[{altura: ["2′11″", 0.90],	peso: [27.6, 12.5], descripcion: "Average Size"},
							 {altura: ["2′04″", 0.70],	peso: [20.9, 9.5], descripcion: "Small Size", cod: '711-s'},
							 {altura: ["3′07″", 1.10],	peso: [30.9, 14.0], descripcion: "Large Size", cod: '711-l'},
							 {altura: ["5′07″", 1.70],	peso: [86, 39.0], descripcion: "Super Size", cod: '711-x'},],},
{id: 712,	dimensiones:	[{altura: ["3′3″", 0.99],	peso: [219.4, 99.5],},],},
{id: 713,	dimensiones:	[{altura: ["6′7″", 2.01],	peso: [1113.3, 505.0],},],},
{id: 714,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [17.6, 8.0],},],},
{id: 715,	dimensiones:	[{altura: ["4′11″", 1.50],	peso: [187.4, 85.0],},],},
{id: 716,	dimensiones:	[{altura: ["9′10″", 3.00],	peso: [474, 215.0],},],},
{id: 717,	dimensiones:	[{altura: ["19′0″", 5.79],	peso: [447.5, 203.0],},],},
{id: 718,	dimensiones:	[{altura: ["16′5″", 5.00],	peso: [672.4, 305.0],},],},
{id: 719,	dimensiones:	[{altura: ["2′4″", 0.71],	peso: [19.4, 8.8],},],
		megaDimensiones:	[{altura: ["3′7″", 1.09],	peso: [61.3, 27.8], descripcion: "Mega Diancie", cod: '719-m'},],},
{id: 720,	dimensiones:	[{altura: ["1′8″", 0.51],	peso: [19.8, 9.0], descripcion: "Confined Forme"},
							 {altura: ["21′04″", 6.5],	peso: [1080.3, 490.0], descripcion: "Unbound Forme", cod: '720-u'},],},


];








function getAltura(valor){
	//console.log(valor);

	//console.log("Hay "+arguments.length+" argumentos");
	/*
	if (valor === undefined) {
		console.log("Argumento vacio");
	}else{
		console.log("viene con un argumento");
	}
	console.log(arguments);
	*/




	//http://javascript.info/tutorial/arguments
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

	var vPies, vMetros;

	for (var i = 0; i < sizes.length; i++) {
		if (i == valor) {
			//console.log("Altura en pies: "+sizes[i].dimensiones[0].altura[0]);
			//console.log("Altura en metros: "+sizes[i].dimensiones[0].altura[1]);
			//if (sizes[i].dimensiones.length > 1) {
			//	console.log("Tiene formas alternativas con diferentes dimensiones");
			//}else{
			//	console.log("Solo tiene una forma");
			//}
			if (sizes[i].dimensiones.length > 1) {
				//console.log((i+1)+" tiene mas de una coleccion");
				for(var j = 0; j < sizes[i].dimensiones.length; j++){
					//
					//console.log(sizes[i].dimensiones[j].altura);
					if (arguments[1] == sizes[i].dimensiones[j].cod) {
						//console.log(sizes[i].dimensiones[j].cod);
						vPies = sizes[i].dimensiones[j].altura[0];
						vMetros = sizes[i].dimensiones[j].altura[1];
						break;
						//return {pies: sizes[i].dimensiones[j].altura[0], metros: sizes[i].dimensiones[j].altura[1]};
					}
				}
			}else{
				//
				vPies = sizes[i].dimensiones[0].altura[0];
				vMetros = sizes[i].dimensiones[0].altura[1];
				//return {pies: sizes[i].dimensiones[0].altura[0], metros: sizes[i].dimensiones[0].altura[1]};
			}
			break;
			//return {pies: sizes[i].dimensiones[0].altura[0], metros: sizes[i].dimensiones[0].altura[1]};
		}
	}
	return {pies: vPies, metros: vMetros};
}



function getPeso(valor){

	var vLibras, vKilogramos;

	for (var i = 0; i < sizes.length; i++) {
		if (i == valor) {
			//if (sizes[i].dimensiones.length > 1) {
			//	console.log("Tiene formas alternativas con diferentes dimensiones");
			//}else{
			//	console.log("Solo tiene una forma");
			//}

			if (sizes[i].dimensiones.length > 1) {
				//
				for(var j = 0; j < sizes[i].dimensiones.length; j++){
					//
					if (arguments[1] == sizes[i].dimensiones[j].cod) {
						vLibras = sizes[i].dimensiones[j].peso[0];
						vKilogramos = sizes[i].dimensiones[j].peso[1];
						break;
					}
				}
			}else{
				//
				vLibras = sizes[i].dimensiones[0].peso[0];
				vKilogramos = sizes[i].dimensiones[0].peso[1];
			}
			break;
			//return {libras: sizes[i].dimensiones[0].peso[0], kilogramos: sizes[i].dimensiones[0].peso[1]};
		}
	}
	return {libras: vLibras, kilogramos: vKilogramos};
}








































//Para megas



function getAlturaMega(valor){
	//
	var vPies, vMetros;
	for(var i = 0; i < sizes.length; i++){
		//
		if(i == valor && sizes[i].priDimensiones !== undefined){
			//
			return{
				pies: sizes[i].priDimensiones[0].altura[0],
				metros: sizes[i].priDimensiones[0].altura[1],
			};
		}
		if(i == valor && sizes[i].megaDimensiones !== undefined){
			//
			if(sizes[i].megaDimensiones.length > 1){
				//
				//console.log("Tiene mas megaevoluciones");
				for(var j = 0; j < sizes[i].megaDimensiones.length; j++){
					//
					if(arguments[1] == sizes[i].megaDimensiones[j].cod){
						vPies = sizes[i].megaDimensiones[j].altura[0];
						vMetros = sizes[i].megaDimensiones[j].altura[1];
					}
				}
			}else{
				//console.log("Solo una megaevolucion");
				vPies = sizes[i].megaDimensiones[0].altura[0];
				vMetros = sizes[i].megaDimensiones[0].altura[1];
			}
			return {pies: vPies, metros: vMetros};
		}
	}
}






function getPesoMega(valor){
	//
	var vLibras, vKilogramos;
	for(var i = 0; i < sizes.length; i++){
		//
		if(i == valor && sizes[i].priDimensiones !== undefined){
			//
			return{
				libras: sizes[i].priDimensiones[0].peso[0],
				kilogramos: sizes[i].priDimensiones[0].peso[1],
			};
		}
		if(i == valor && sizes[i].megaDimensiones !== undefined){
			//
			if(sizes[i].megaDimensiones.length > 1){
				//
				//console.log("Tiene mas megaevoluciones");
				for(var j = 0; j < sizes[i].megaDimensiones.length; j++){
					//
					if(arguments[1] == sizes[i].megaDimensiones[j].cod){
						vLibras = sizes[i].megaDimensiones[j].peso[0];
						vKilogramos = sizes[i].megaDimensiones[j].peso[1];
					}
				}
			}else{
				//console.log("Solo una megaevolucion");
				vLibras = sizes[i].megaDimensiones[0].peso[0];
				vKilogramos = sizes[i].megaDimensiones[0].peso[1];
			}
			return {libras: vLibras, kilogramos: vKilogramos};
		}
	}
}
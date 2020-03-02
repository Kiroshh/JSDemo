function getJson (){
    //not working
    fetch('./Data/data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            console.log(data)
        })
        .catch(err => {
            console.log("error")
        })
}



function getData() {
    //TODO: load the json data from file
    let productsData = [
        {
            "sku": 43900,
            "name": "Duracell - AAA Batteries (4-Pack)",
            "type": "HardGood",
            "price": 5.49,
            "upc": "041333424019",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat248700050021",
                    "name": "Housewares"
                },
                {
                    "id": "pcmcat303600050001",
                    "name": "Household Batteries"
                },
                {
                    "id": "abcat0208002",
                    "name": "Alkaline Batteries"
                }
            ],
            "shipping": 5.49,
            "description": "Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack",
            "manufacturer": "Duracell",
            "model": "MN2400B4Z",
            "url": "http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg"
        },
        {
            "sku": 48530,
            "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
            "type": "HardGood",
            "price": 5.49,
            "upc": "041333415017",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat248700050021",
                    "name": "Housewares"
                },
                {
                    "id": "pcmcat303600050001",
                    "name": "Household Batteries"
                },
                {
                    "id": "abcat0208002",
                    "name": "Alkaline Batteries"
                }
            ],
            "shipping": 5.49,
            "description": "Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more",
            "manufacturer": "Duracell",
            "model": "MN1500B4Z",
            "url": "http://www.bestbuy.com/site/duracell-aa-1-5v-coppertop-batteries-4-pack/48530.p?id=1099385268988&skuId=48530&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/4853/48530_sa.jpg"
        },
        {
            "sku": 1087056,
            "name": "Metra - Installation Kit for Select 2007-2010 Hyundai Elantra Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429175338",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2007-2010 Hyundai Elantra vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; quick-release snap-in ISO mount system",
            "manufacturer": "Metra",
            "model": "95-7332",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-select-2007-2010-hyundai-elantra-vehicles-black/1087056.p?id=1218665531969&skuId=1087056&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1087/1087056_sa.jpg"
        },
        {
            "sku": 1087065,
            "name": "Metra - Dash Kit for Select 2009-2010 Ford F-150 Lariat/F-150 Platinum w/o NAV - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429204939",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select 2009-2010 Ford F-150 vehicles; ISO mount and DIN radio provisions; pocket",
            "manufacturer": "Metra",
            "model": "99-5822B",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2009-2010-ford-f-150-lariat-f-150-platinum-w-o-nav-black/1087065.p?id=1218665523537&skuId=1087065&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1087/1087065_rc.jpg"
        },
        {
            "sku": 1031726,
            "name": "Audio-Technica - Microphone",
            "type": "HardGood",
            "price": 595.99,
            "upc": "042005128525",
            "category": [
                {
                    "id": "abcat0207000",
                    "name": "Musical Instruments"
                },
                {
                    "id": "pcmcat152100050035",
                    "name": "Microphones & Live Sound"
                },
                {
                    "id": "pcmcat251600050003",
                    "name": "Microphones & Accessories"
                },
                {
                    "id": "pcmcat152100050038",
                    "name": "Microphones"
                },
                {
                    "id": "pcmcat221400050015",
                    "name": "Condenser"
                }
            ],
            "shipping": 0,
            "description": "30 Hz to 20 kHz - Wired - Condenser - Handheld - XLR",
            "manufacturer": "Audio-Technica",
            "model": "AT4033/CL",
            "url": "http://www.bestbuy.com/site/audio-technica-microphone/1031726.p?id=1218211288553&skuId=1031726CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1031/1031726_sa.jpg"
        },
        {
            "sku": 1032001,
            "name": "Nikon - AF-S NIKKOR 20mm f/1.8G ED Ultra Wide Angle Lens for Most Nikon F-Mount Cameras - Black",
            "type": "HardGood",
            "price": 799.99,
            "upc": "018208200511",
            "category": [
                {
                    "id": "abcat0400000",
                    "name": "Cameras & Camcorders"
                },
                {
                    "id": "abcat0410000",
                    "name": "Digital Camera Accessories"
                },
                {
                    "id": "abcat0410018",
                    "name": "Camera Lenses"
                },
                {
                    "id": "pcmcat233000050008",
                    "name": "DSLR Lenses"
                },
                {
                    "id": "pcmcat195200050001",
                    "name": "Prime Lenses"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most Nikon F-Mount cameras; 13 lens elements in 11 groups; Nano Crystal coating; 2 ED glass elements; 2 aspherical elements",
            "manufacturer": "Nikon",
            "model": "20051",
            "url": "http://www.bestbuy.com/site/nikon-af-s-nikkor-20mm-f-1-8g-ed-ultra-wide-angle-lens-for-most-nikon-f-mount-cameras-black/1032001.p?id=1219460767310&skuId=1032001&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1032/1032001_sa.jpg"
        },
        {
            "sku": 1032038,
            "name": "PNY - GT 730 1GB DDR3 PCI Express 2.0 Graphics Card - Black",
            "type": "HardGood",
            "price": 59.99,
            "upc": "751492578163",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0507000",
                    "name": "Computer Cards & Components"
                },
                {
                    "id": "abcat0507002",
                    "name": "GPUs/Video Graphics Cards"
                },
                {
                    "id": "pcmcat182300050008",
                    "name": "PCI Express Graphics Cards"
                }
            ],
            "shipping": 0,
            "description": "1GB DDR3 memory; PCI Express 2.0 interface; HDMI output; 400MHz clock speed; PhysX system software",
            "manufacturer": "PNY",
            "model": "VCGGT7301D3LXPB-BB",
            "url": "http://www.bestbuy.com/site/pny-gt-730-1gb-ddr3-pci-express-2-0-graphics-card-black/1032038.p?id=1219460773496&skuId=1032038&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1032/1032038_sa.jpg"
        },
        {
            "sku": 1032198,
            "name": "Dell - 90W AC Power Adapter - Black",
            "type": "HardGood",
            "price": 65.99,
            "upc": "884116022879",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0515000",
                    "name": "Computer Accessories & Peripherals"
                },
                {
                    "id": "abcat0515025",
                    "name": "Laptop Accessories"
                },
                {
                    "id": "pcmcat183800050007",
                    "name": "Laptop Chargers & Adapters"
                }
            ],
            "shipping": 0,
            "description": "DELL 90W AC Power Adapter: Designed to power your Dell system; 90W power supply",
            "manufacturer": "Dell",
            "model": "3306258",
            "url": "http://www.bestbuy.com/site/dell-90w-ac-power-adapter-black/1032198.p?id=1219460756243&skuId=1032198&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1032/1032198_sa.jpg"
        },
        {
            "sku": 1032403,
            "name": "Need for Speed: Hot Pursuit - PlayStation 3",
            "type": "Game",
            "price": 19.99,
            "upc": "014633731644",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "abcat0703000",
                    "name": "PlayStation 3"
                },
                {
                    "id": "abcat0703002",
                    "name": "PS3 Games"
                }
            ],
            "shipping": 3.99,
            "description": "Switch into gear and feel the need &#8212; the Need for Speed",
            "manufacturer": "EA",
            "model": "DUMMY SKU",
            "url": "http://www.bestbuy.com/site/need-for-speed-hot-pursuit-playstation-3/1032403.p?id=1218211702103&skuId=1032403&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1032/1032403_sa.jpg"
        },
        {
            "sku": 1033032,
            "name": "Wahl - 20-Piece Pro Hair Cutting Kit - Blue/White/Black",
            "type": "HardGood",
            "price": 22.99,
            "upc": "043917793092",
            "category": [
                {
                    "id": "pcmcat242800050021",
                    "name": "Health, Fitness & Beauty"
                },
                {
                    "id": "abcat0915000",
                    "name": "Personal Care & Beauty"
                },
                {
                    "id": "abcat0915009",
                    "name": "Hair Care"
                },
                {
                    "id": "pcmcat238300050017",
                    "name": "Hair & Nail Cutting Kits"
                }
            ],
            "shipping": 5.99,
            "description": "One-touch operation; self-sharpening, high-carbon steel blades; 12 color-coded guide combs; ergonomic handle with a soft-touch grip",
            "manufacturer": "Wahl",
            "model": "79300-400",
            "url": "http://www.bestbuy.com/site/wahl-20-piece-pro-hair-cutting-kit-blue-white-black/1033032.p?id=1218212156490&skuId=1033032&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1033/1033032_rc.jpg"
        },
        {
            "sku": 1033096,
            "name": "Frigidaire - 6,000 BTU Window Air Conditioner - White",
            "type": "HardGood",
            "price": 229.99,
            "upc": "012505273575",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "pcmcat302300050021",
                    "name": "Heating, Cooling & Air Quality"
                },
                {
                    "id": "abcat0907001",
                    "name": "Air Conditioners"
                },
                {
                    "id": "abcat0907005",
                    "name": "Window Air Conditioners"
                }
            ],
            "shipping": 0,
            "description": "216 sq. ft. cooling capacity; electronic controls and remote; 3 cool settings; 3 fan speeds; antibacterial filter",
            "manufacturer": "Frigidaire",
            "model": "Fra065at7",
            "url": "http://www.bestbuy.com/site/frigidaire-6000-btu-window-air-conditioner-white/1033096.p?id=1218212155267&skuId=1033096&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1033/1033096_sa.jpg"
        },
        {
            "sku": 1034009,
            "name": "WWE 2K15 - PRE-OWNED - PlayStation 3",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840305",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Step into the ring and fight your way to the gold",
            "manufacturer": "2K",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/wwe-2k15-pre-owned-playstation-3/1034009.p?id=1219461501659&skuId=1034009&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034009_sa.jpg"
        },
        {
            "sku": 1034018,
            "name": "Sunset Overdrive - PRE-OWNED - Xbox One",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840312",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Take down mutants and prove your mettle in a post-apocalyptic setting",
            "manufacturer": "Microsoft",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/sunset-overdrive-pre-owned-xbox-one/1034018.p?id=1219461498306&skuId=1034018&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034018_sa.jpg"
        },
        {
            "sku": 1034027,
            "name": "NBA Live 15 - PRE-OWNED - PlayStation 4",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840329",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Get back on the court with NBA Live 15",
            "manufacturer": "EA",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/nba-live-15-pre-owned-playstation-4/1034027.p?id=1219461500094&skuId=1034027&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034027_sa.jpg"
        },
        {
            "sku": 1034036,
            "name": "NBA Live 15 - PRE-OWNED - Xbox One",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840336",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Get back on the court with NBA Live 15",
            "manufacturer": "EA",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/nba-live-15-pre-owned-xbox-one/1034036.p?id=1219461500677&skuId=1034036&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034036_sa.jpg"
        },
        {
            "sku": 1034045,
            "name": "Assassin's Creed: The Americas Collection - PRE-OWNED - Xbox 360",
            "type": "Game",
            "price": 14.99,
            "upc": "799007840343",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Unsheath your blade for thrilling combat in The Americas",
            "manufacturer": "Ubisoft",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/assassins-creed-the-americas-collection-pre-owned-xbox-360/1034045.p?id=1219461503133&skuId=1034045&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034045_sa.jpg"
        },
        {
            "sku": 1034072,
            "name": "Assassin's Creed: The Americas Collection - PRE-OWNED - PlayStation 3",
            "type": "Game",
            "price": 14.99,
            "upc": "799007840350",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Unsheath your blade for thrilling combat in The Americas",
            "manufacturer": "Ubisoft",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/assassins-creed-the-americas-collection-pre-owned-playstation-3/1034072.p?id=1219461496042&skuId=1034072&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034072_sa.jpg"
        },
        {
            "sku": 1034081,
            "name": "The Legend of Korra: A New Era Begins - PRE-OWNED - Nintendo 3DS",
            "type": "Game",
            "price": 14.99,
            "upc": "799007840367",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "It's time for a new era to begin",
            "manufacturer": "Activision",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/the-legend-of-korra-a-new-era-begins-pre-owned-nintendo-3ds/1034081.p?id=1219461502379&skuId=1034081&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034081_sa.jpg"
        },
        {
            "sku": 1034105,
            "name": "Air Conflicts: Vietnam - PRE-OWNED - PlayStation 4",
            "type": "Game",
            "price": 14.99,
            "upc": "799007840374",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Take to the skies over one of history's deadliest conflicts",
            "manufacturer": "Majesco",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/air-conflicts-vietnam-pre-owned-playstation-4/1034105.p?id=1219461502449&skuId=1034105&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034105_sa.jpg"
        },
        {
            "sku": 1034544,
            "name": "CHI - Air Expert Classic Tourmaline Ceramic 1\" Flat Iron - Onyx Black",
            "type": "HardGood",
            "price": 99.99,
            "upc": "813843010101",
            "category": [
                {
                    "id": "pcmcat242800050021",
                    "name": "Health, Fitness & Beauty"
                },
                {
                    "id": "abcat0915000",
                    "name": "Personal Care & Beauty"
                },
                {
                    "id": "abcat0915009",
                    "name": "Hair Care"
                },
                {
                    "id": "pcmcat174400050010",
                    "name": "Hair Straighteners"
                }
            ],
            "shipping": 0,
            "description": "Variable heat settings with a temperature dial; quick heat up; 9' swivel cord; floating plates",
            "manufacturer": "CHI",
            "model": "CA1010",
            "url": "http://www.bestbuy.com/site/chi-air-expert-classic-tourmaline-ceramic-1-flat-iron-onyx-black/1034544.p?id=1218212158220&skuId=1034544&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1034/1034544_rc.jpg"
        },
        {
            "sku": 1035786,
            "name": "StarTech - HDMI to DVI Digital Video Cable - Black",
            "type": "HardGood",
            "price": 44.99,
            "upc": "065030813969",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0515000",
                    "name": "Computer Accessories & Peripherals"
                },
                {
                    "id": "pcmcat221100050003",
                    "name": "Monitor & Screen Accessories"
                },
                {
                    "id": "pcmcat138100050035",
                    "name": "Monitor & Video Cables"
                }
            ],
            "shipping": 0,
            "description": "HDMI - 29.86 ft - 1 Pack - 1 x Male HDMI - 1 x DVI-D Male Video - Black",
            "manufacturer": "StarTech",
            "model": "HDMIDVIMM30",
            "url": "http://www.bestbuy.com/site/startech-hdmi-to-dvi-digital-video-cable-black/1035786.p?id=1218265850115&skuId=1035786&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1035/1035786_rc.jpg"
        },
        {
            "sku": 1036658,
            "name": "Hamilton Beach - Coffee Urn - Silver",
            "type": "HardGood",
            "price": 37.54,
            "upc": "040094405152",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "pcmcat367400050002",
                    "name": "Coffee, Tea & Espresso"
                },
                {
                    "id": "abcat0912005",
                    "name": "Coffee Makers"
                },
                {
                    "id": "pcmcat258900050007",
                    "name": "Multi-Cup Coffee Makers"
                }
            ],
            "shipping": 0,
            "description": "42 Cup(s) - Silver - Aluminum",
            "manufacturer": "Hamilton Beach",
            "model": "40515",
            "url": "http://www.bestbuy.com/site/hamilton-beach-coffee-urn-silver/1036658.p?id=1218212059983&skuId=1036658CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1036/1036658_rc.jpg"
        },
        {
            "sku": 1036821,
            "name": "Mavea - Maxtra Filter - Multi",
            "type": "HardGood",
            "price": 7.99,
            "upc": "812501010279",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "pcmcat367400050002",
                    "name": "Coffee, Tea & Espresso"
                },
                {
                    "id": "abcat0912007",
                    "name": "Coffee Grinders & Filters"
                },
                {
                    "id": "pcmcat258900050012",
                    "name": "Coffee Filters"
                }
            ],
            "shipping": 5.49,
            "description": "Helps remove chlorine taste and odor, benzene, mercury, copper, atrazine and limescale from your drinking water; filter micro screen; contains silver; BPA-free",
            "manufacturer": "Mavea",
            "model": "1001495",
            "url": "http://www.bestbuy.com/site/mavea-maxtra-filter-multi/1036821.p?id=1218211735780&skuId=1036821&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1036/1036821_sa.jpg"
        },
        {
            "sku": 1042043,
            "name": "Nanette Lepore - Hard Shell Case for Apple° iPhone° 6 and 6s - Multicolor Stripes",
            "type": "HardGood",
            "price": 4.99,
            "upc": "5031300084686",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Apple iPhone 6 and 6s; polycarbonate shell; inner TPU construction; play-through design",
            "manufacturer": "Nanette Lepore",
            "model": "CO8468",
            "url": "http://www.bestbuy.com/site/nanette-lepore-hard-shell-case-for-apple-iphone-6-and-6s-multicolor-stripes/1042043.p?id=1219461889368&skuId=1042043&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1042/1042043_sa.jpg"
        },
        {
            "sku": 1044069,
            "name": "Altec - Hard Shell Fashion Case for Apple® iPhone® 5 and 5s - Purple/Gray",
            "type": "HardGood",
            "price": 12.99,
            "upc": "810532023763",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC Hard Shell Fashion Case for Apple iPhone 5 and 5s: Compatible with Apple iPhone 5 and 5s; scratch-resistant material; play-through design; shock-resistant up to 2'",
            "manufacturer": "Altec",
            "model": "AL-IP5GC-06",
            "url": "http://www.bestbuy.com/site/altec-hard-shell-fashion-case-for-apple-iphone-5-and-5s-purple-gray/1044069.p?id=1219461498176&skuId=1044069CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044069_sa.jpg"
        },
        {
            "sku": 1044101,
            "name": "Altec - 4000 mAh Power Bank - Black",
            "type": "HardGood",
            "price": 29.99,
            "upc": "810532023343",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811004",
                    "name": "Cell Phone Batteries & Power"
                },
                {
                    "id": "pcmcat326000050010",
                    "name": "Portable Chargers/Power Packs"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC 4000 mAh Power Bank: Compatible with most USB-enabled mobile devices; USB interface; built-in lithium-ion battery; up to 500 hours of standby time; overload protection; soft rubberized finish",
            "manufacturer": "Altec",
            "model": "AL-PCSC-01",
            "url": "http://www.bestbuy.com/site/altec-4000-mah-power-bank-black/1044101.p?id=1219461503840&skuId=1044101CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044101_sa.jpg"
        },
        {
            "sku": 1044174,
            "name": "Altec - 4000 mAh Power Bank - Blue",
            "type": "HardGood",
            "price": 29.99,
            "upc": "810532023350",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811004",
                    "name": "Cell Phone Batteries & Power"
                },
                {
                    "id": "pcmcat326000050010",
                    "name": "Portable Chargers/Power Packs"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC 4000 mAh Power Bank: Compatible with most USB-enabled mobile devices; USB interface; built-in lithium-ion battery; up to 500 hours of standby time; overload protection; soft rubberized finish",
            "manufacturer": "Altec",
            "model": "AL-PCSC-04",
            "url": "http://www.bestbuy.com/site/altec-4000-mah-power-bank-blue/1044174.p?id=1219461499071&skuId=1044174CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044174_sa.jpg"
        },
        {
            "sku": 1044289,
            "name": "Altec - Hard Shell Power Case for Samsung Galaxy S 4 Cell Phones - White",
            "type": "HardGood",
            "price": 49.99,
            "upc": "810532023695",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "ALTEC Hard Shell Power Case for Samsung Galaxy S 4 Cell Phones: Compatible with Samsung Galaxy S 4 cell phones; built-in kickstand; power button with LED power indicator; shock resistant; play-through design",
            "manufacturer": "Altec",
            "model": "AL-GS4PC-04",
            "url": "http://www.bestbuy.com/site/altec-hard-shell-power-case-for-samsung-galaxy-s-4-cell-phones-white/1044289.p?id=1219461500496&skuId=1044289&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044289_sa.jpg"
        },
        {
            "sku": 1044302,
            "name": "Altec - Sport Armband for Apple® iPhone® 4, 4S, 5 and 5s - Pink",
            "type": "HardGood",
            "price": 14.99,
            "upc": "810532022421",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC Sport Armband for Apple iPhone 4, 4S, 5 and 5s: Compatible with Apple iPhone 4, 4S, 5 and 5s and iPod touch; adjusts to arm diameters from 5\" to 7\"; mesh fabric; key compartment; built-in wallet; headphone port access",
            "manufacturer": "Altec",
            "model": "ALIAB4213",
            "url": "http://www.bestbuy.com/site/altec-sport-armband-for-apple-iphone-4-4s-5-and-5s-pink/1044302.p?id=1219461503585&skuId=1044302&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044302_sa.jpg"
        },
        {
            "sku": 1044339,
            "name": "Altec - 4000 mAh Power Bank - Pink",
            "type": "HardGood",
            "price": 29.99,
            "upc": "810532023367",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811004",
                    "name": "Cell Phone Batteries & Power"
                },
                {
                    "id": "pcmcat326000050010",
                    "name": "Portable Chargers/Power Packs"
                }
            ],
            "shipping": 0,
            "description": "ALTEC 4000 mAh Power Bank: Compatible with most USB-enabled mobile devices; USB interface; built-in lithium-ion battery; up to 500 hours of standby time; overload protection; soft rubberized finish",
            "manufacturer": "Altec",
            "model": "AL-PCSC-02",
            "url": "http://www.bestbuy.com/site/altec-4000-mah-power-bank-pink/1044339.p?id=1219461502123&skuId=1044339CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044339_sa.jpg"
        },
        {
            "sku": 1044348,
            "name": "Altec - Sport Armband Case for Samsung Galaxy S III and S 4 Cell Phones - Pink",
            "type": "HardGood",
            "price": 14.99,
            "upc": "810532022452",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC Sport Armband Case for Samsung Galaxy S III and S 4 Cell Phones: Compatible with Samsung Galaxy S III and S 4 cell phones as well as most Android devices; adjustable arm diameter from 5\" to 7\"; built-in wallet; includes key compartment",
            "manufacturer": "Altec",
            "model": "ALIAB4216",
            "url": "http://www.bestbuy.com/site/altec-sport-armband-case-for-samsung-galaxy-s-iii-and-s-4-cell-phones-pink/1044348.p?id=1219461499006&skuId=1044348&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044348_sa.jpg"
        },
        {
            "sku": 1044357,
            "name": "Altec - Sport Armband Case for Samsung Galaxy S III and S 4 Cell Phones - Blue",
            "type": "HardGood",
            "price": 14.99,
            "upc": "810532022469",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "ALTEC Sport Armband Case for Samsung Galaxy S III and S 4 Cell Phones: Compatible with Samsung Galaxy S III and S 4 cell phones as well as most Android devices; adjustable arm diameter from 5\" to 7\"; built-in wallet; includes key compartment",
            "manufacturer": "Altec",
            "model": "ALIAB4217",
            "url": "http://www.bestbuy.com/site/altec-sport-armband-case-for-samsung-galaxy-s-iii-and-s-4-cell-phones-blue/1044357.p?id=1219461502824&skuId=1044357CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1044/1044357_sa.jpg"
        },
        {
            "sku": 1046049,
            "name": "Team ProMark - NFL Tampa Bay Buccaneers Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763294",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Tampa Bay Buccaneers Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99185VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-tampa-bay-buccaneers-bumper-case-for-apple-iphone-6-black/1046049.p?id=1219461497413&skuId=1046049&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046049_sa.jpg"
        },
        {
            "sku": 1046058,
            "name": "Team ProMark - NFL Dallas Cowboys Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763096",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Dallas Cowboys Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99164VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-dallas-cowboys-bumper-case-for-apple-iphone-6-black/1046058.p?id=1219461499201&skuId=1046058CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046058_sa.jpg"
        },
        {
            "sku": 1046067,
            "name": "Team ProMark - NFL Miami Dolphins Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763164",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Miami Dolphins Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99172VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-miami-dolphins-bumper-case-for-apple-iphone-6-black/1046067.p?id=1219461501007&skuId=1046067CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046067_sa.jpg"
        },
        {
            "sku": 1046109,
            "name": "Big Hero 6: Battle in the Bay - PRE-OWNED - Nintendo 3DS",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840381",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Use your unique superhero abilities to fight enemies",
            "manufacturer": "GameMill",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/big-hero-6-battle-in-the-bay-pre-owned-nintendo-3ds/1046109.p?id=1219461501660&skuId=1046109&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046109_sa.jpg"
        },
        {
            "sku": 1046118,
            "name": "Team ProMark - NFL Buffalo Bills Bump Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763041",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Buffalo Bills Bump Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; team design",
            "manufacturer": "Team ProMark",
            "model": "99159VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-buffalo-bills-bump-case-for-apple-iphone-6-black/1046118.p?id=1219461501006&skuId=1046118CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046118_sa.jpg"
        },
        {
            "sku": 1046136,
            "name": "Team ProMark - NFL St. Louis Rams Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763287",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK St. Louis Rams Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99184VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-st-louis-rams-bumper-case-for-apple-iphone-6-black/1046136.p?id=1219461496035&skuId=1046136CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046136_sa.jpg"
        },
        {
            "sku": 1046145,
            "name": "Team ProMark - NFL New York Jets Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763218",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK New York Jets Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99177VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-new-york-jets-bumper-case-for-apple-iphone-6-black/1046145.p?id=1219461496034&skuId=1046145CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046145_sa.jpg"
        },
        {
            "sku": 1046154,
            "name": "Team ProMark - NFL Arizona Cardinals Bump Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763010",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Arizona Cardinals Bump Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; team design",
            "manufacturer": "Team ProMark",
            "model": "99156VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-arizona-cardinals-bump-case-for-apple-iphone-6-black/1046154.p?id=1219461502450&skuId=1046154CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046154_sa.jpg"
        },
        {
            "sku": 1046163,
            "name": "Team ProMark - NFL Atlanta Falcons Bump Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763027",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Atlanta Falcons Bump Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; team design",
            "manufacturer": "Team ProMark",
            "model": "99157VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-atlanta-falcons-bump-case-for-apple-iphone-6-black/1046163.p?id=1219461496032&skuId=1046163CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046163_sa.jpg"
        },
        {
            "sku": 1046172,
            "name": "Team ProMark - NFL San Diego Chargers Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763256",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK San Diego Chargers Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99181VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-san-diego-chargers-bumper-case-for-apple-iphone-6-black/1046172.p?id=1219461498500&skuId=1046172CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046172_sa.jpg"
        },
        {
            "sku": 1046181,
            "name": "Team ProMark - NFL Washington Redskins Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763317",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Washington Redskins Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99187VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-washington-redskins-bumper-case-for-apple-iphone-6-black/1046181.p?id=1219461496038&skuId=1046181CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046181_sa.jpg"
        },
        {
            "sku": 1046205,
            "name": "Team ProMark - NFL Jacksonville Jaguars Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763140",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Jacksonville Jaguars Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99170VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-jacksonville-jaguars-bumper-case-for-apple-iphone-6-black/1046205.p?id=1219461503337&skuId=1046205CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046205_sa.jpg"
        },
        {
            "sku": 1046214,
            "name": "Team ProMark - NFL Oakland Raiders Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763225",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Oakland Raiders Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99178VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-oakland-raiders-bumper-case-for-apple-iphone-6-black/1046214.p?id=1219461501273&skuId=1046214CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046214_sa.jpg"
        },
        {
            "sku": 1046232,
            "name": "Team ProMark - NFL Tennessee Titans Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763300",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Tennessee Titans Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99186VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-tennessee-titans-bumper-case-for-apple-iphone-6-black/1046232.p?id=1219461499972&skuId=1046232CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046232_sa.jpg"
        },
        {
            "sku": 1046241,
            "name": "Team ProMark - NFL Pittsburgh Steelers Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763249",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Pittsburgh Steelers Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99180VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-pittsburgh-steelers-bumper-case-for-apple-iphone-6-black/1046241.p?id=1219461499328&skuId=1046241&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046241_sa.jpg"
        },
        {
            "sku": 1046269,
            "name": "Team ProMark - NFL Indianapolis Colts Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763133",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Indianapolis Colts Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99169VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-indianapolis-colts-bumper-case-for-apple-iphone-6-black/1046269.p?id=1219461497598&skuId=1046269&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046269_sa.jpg"
        },
        {
            "sku": 1046278,
            "name": "Team ProMark - NFL Cincinnati Bengals Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763072",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Cincinnati Bengals Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99162VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-cincinnati-bengals-bumper-case-for-apple-iphone-6-black/1046278.p?id=1219461502822&skuId=1046278&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046278_sa.jpg"
        },
        {
            "sku": 1046287,
            "name": "Team ProMark - NFL Kansas City Chiefs Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763157",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Kansas City Chiefs Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99171VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-kansas-city-chiefs-bumper-case-for-apple-iphone-6-black/1046287.p?id=1219461497926&skuId=1046287&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046287_sa.jpg"
        },
        {
            "sku": 1046319,
            "name": "Team ProMark - NFL Cleveland Browns Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763089",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Cleveland Browns Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99163VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-cleveland-browns-bumper-case-for-apple-iphone-6-black/1046319.p?id=1219461499329&skuId=1046319&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046319_sa.jpg"
        },
        {
            "sku": 1046328,
            "name": "Team ProMark - NFL Minnesota Vikings Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763171",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Minnesota Vikings Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99173VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-minnesota-vikings-bumper-case-for-apple-iphone-6-black/1046328.p?id=1219461503338&skuId=1046328&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046328_sa.jpg"
        },
        {
            "sku": 1046346,
            "name": "Team ProMark - NFL Denver Broncos Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763102",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Denver Broncos Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99165VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-denver-broncos-bumper-case-for-apple-iphone-6-black/1046346.p?id=1219461499715&skuId=1046346&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046346_sa.jpg"
        },
        {
            "sku": 1046355,
            "name": "Team ProMark - NFL New Orleans Saints Bumper Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763195",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK New Orleans Saints Bumper Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; raised bezel; team-specific design",
            "manufacturer": "Team ProMark",
            "model": "99175VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-new-orleans-saints-bumper-case-for-apple-iphone-6-black/1046355.p?id=1219461498241&skuId=1046355&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046355_sa.jpg"
        },
        {
            "sku": 1046364,
            "name": "Team ProMark - NFL Carolina Panthers Bump Case for Apple® iPhone® 6 - Black",
            "type": "HardGood",
            "price": 19.99,
            "upc": "681620763058",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 5.49,
            "description": "TEAM PROMARK Carolina Panthers Bump Case for Apple iPhone 6: Compatible with Apple iPhone 6; PC and TPU materials; rubber edges; team design",
            "manufacturer": "Team ProMark",
            "model": "99160VRP",
            "url": "http://www.bestbuy.com/site/team-promark-nfl-carolina-panthers-bump-case-for-apple-iphone-6-black/1046364.p?id=1219461496036&skuId=1046364&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1046/1046364_sa.jpg"
        },
        {
            "sku": 1047317,
            "name": "SanDisk - Ultra 16 GB microSDHC UHS-I/Class 10 Memory Card",
            "type": "HardGood",
            "price": 39.99,
            "upc": "619659139773",
            "category": [
                {
                    "id": "abcat0400000",
                    "name": "Cameras & Camcorders"
                },
                {
                    "id": "abcat0404000",
                    "name": "Memory Cards"
                },
                {
                    "id": "pcmcat748300453560",
                    "name": "Micro SD (SD, SDHC, SDXC)"
                },
                {
                    "id": "pcmcat351600050002",
                    "name": "Micro SDHC"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most devices with a microSDHC card slot; 16GB capacity; up to 48MB/sec. data transfer rate",
            "manufacturer": "SanDisk",
            "model": "SDSQUSC-016G-ABVIA",
            "url": "http://www.bestbuy.com/site/sandisk-ultra-16-gb-microsdhc-uhs-i-class-10-memory-card/1047317.p?id=bb1047317&skuId=1047317&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1047/1047317_sa.jpg"
        },
        {
            "sku": 1048029,
            "name": "Big Hero 6: Battle in the Bay - PRE-OWNED - Nintendo DS",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840398",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Use your unique superhero abilities to fight enemies",
            "manufacturer": "GameMill",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/big-hero-6-battle-in-the-bay-pre-owned-nintendo-ds/1048029.p?id=1219461496039&skuId=1048029&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1048/1048029_sa.jpg"
        },
        {
            "sku": 1048555,
            "name": "Rocketfish - 55mm Circular Polarizer - Gray",
            "type": "HardGood",
            "price": 19.99,
            "upc": "600603131646",
            "category": [
                {
                    "id": "abcat0400000",
                    "name": "Cameras & Camcorders"
                },
                {
                    "id": "abcat0410000",
                    "name": "Digital Camera Accessories"
                },
                {
                    "id": "abcat0410020",
                    "name": "Filters & Accessories"
                },
                {
                    "id": "pcmcat329400050024",
                    "name": "Polarizing Filters"
                }
            ],
            "shipping": 5.49,
            "description": "Compatible with most digital camera lenses that have a 55mm diameter; improves contrast and color saturation; reduces reflections",
            "manufacturer": "Rocketfish",
            "model": "RF-CP55",
            "url": "http://www.bestbuy.com/site/rocketfish-55mm-circular-polarizer-gray/1048555.p?id=1218213534303&skuId=1048555&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1048/1048555_rc.jpg"
        },
        {
            "sku": 1049014,
            "name": "StarTech - DisplayPort to DVI Video Converter Cable - Black",
            "type": "HardGood",
            "price": 30.99,
            "upc": "065030832182",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0515000",
                    "name": "Computer Accessories & Peripherals"
                },
                {
                    "id": "pcmcat221100050003",
                    "name": "Monitor & Screen Accessories"
                },
                {
                    "id": "pcmcat138100050035",
                    "name": "Monitor & Video Cables"
                }
            ],
            "shipping": 0,
            "description": "DisplayPort Male Digital Audio/Video - DVI-D Male Video - 10ft",
            "manufacturer": "StarTech",
            "model": "DP2DVIMM10",
            "url": "http://www.bestbuy.com/site/startech-displayport-to-dvi-video-converter-cable-black/1049014.p?id=1218265847104&skuId=1049014&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1049/1049014_rc.jpg"
        },
        {
            "sku": 1049688,
            "name": "Shark - Professional Lightweight Iron - Red",
            "type": "HardGood",
            "price": 29.99,
            "upc": "622356532242",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "pcmcat305400050001",
                    "name": "Irons, Steamers & Sewing Machines"
                },
                {
                    "id": "abcat0912002",
                    "name": "Irons"
                }
            ],
            "shipping": 6.99,
            "description": "1500W of power; 180&#176; fill tank; easy-push buttons; tapered button tip; turn dial; stainless-steel soleplate; auto off",
            "manufacturer": "Shark",
            "model": "GI305",
            "url": "http://www.bestbuy.com/site/shark-professional-lightweight-iron-red/1049688.p?id=1219045790005&skuId=1049688&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1049/1049688_rc.jpg"
        },
        {
            "sku": 1050569,
            "name": "Xerox - DocuMate 3115 Mobile Scanner with Desktop Docking Station - Black",
            "type": "HardGood",
            "price": 399.99,
            "upc": "785414112579",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0511007",
                    "name": "Scanners, Faxes & Copiers"
                },
                {
                    "id": "abcat0511010",
                    "name": "Sheetfed Scanners"
                }
            ],
            "shipping": 0,
            "description": "USB 2.0/1.1 interface; 600 dpi optical resolution; ejectable mobile scanner; desktop docking station; Visioneer OneTouch and Kofax VRS Basic technologies; 20-page automatic document feeder",
            "manufacturer": "Xerox",
            "model": "XDM31155M-WU",
            "url": "http://www.bestbuy.com/site/xerox-documate-3115-mobile-scanner-with-desktop-docking-station-black/1050569.p?id=1218214263452&skuId=1050569&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1050/1050569_sa.jpg"
        },
        {
            "sku": 1051974,
            "name": "HP - 970 Ink Cartridge - Black",
            "type": "HardGood",
            "price": 74.99,
            "upc": "887111103161",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat275600050000",
                    "name": "Office & School Supplies"
                },
                {
                    "id": "abcat0807000",
                    "name": "Printer Ink & Toner"
                },
                {
                    "id": "abcat0807001",
                    "name": "Printer Ink"
                }
            ],
            "shipping": 0,
            "description": "Compatible with HP Officejet Pro X451dw printers; black ink; delivers crisp documents; yields up to 3,000 pages",
            "manufacturer": "HP",
            "model": "HP 970 Black",
            "url": "http://www.bestbuy.com/site/hp-970-ink-cartridge-black/1051974.p?id=1219045597268&skuId=1051974&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1051/1051974_sa.jpg"
        },
        {
            "sku": 1052096,
            "name": "Insignia™ - 28\" Class (27.5\" Diag.) - LED - 720p - HDTV - Black",
            "type": "HardGood",
            "price": 159.99,
            "upc": "600603185182",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                },
                {
                    "id": "abcat0101001",
                    "name": "All Flat-Panel TVs"
                }
            ],
            "shipping": 0,
            "description": "720p resolution60Hz refresh rate",
            "manufacturer": "Insignia™",
            "model": "NS-28D220NA16",
            "url": "http://www.bestbuy.com/site/insignia-28-class-27-5-diag--led-720p-hdtv-black/1052096.p?id=1219465783489&skuId=1052096&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1052/1052096_sa.jpg"
        },
        {
            "sku": 1053086,
            "name": "Insignia™ - 28\" Class (27.5\" Diag.) - LED - 720p - HDTV DVD Combo - Black",
            "type": "HardGood",
            "price": 189.99,
            "upc": "600603185007",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0101000",
                    "name": "TVs"
                },
                {
                    "id": "abcat0101001",
                    "name": "All Flat-Panel TVs"
                }
            ],
            "shipping": 0,
            "description": "720p resolution60Hz refresh rate",
            "manufacturer": "Insignia™",
            "model": "NS-28DD220NA16",
            "url": "http://www.bestbuy.com/site/insignia-28-class-27-5-diag--led-720p-hdtv-dvd-combo-black/1053086.p?id=1219465782595&skuId=1053086&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053086_sa.jpg"
        },
        {
            "sku": 1053196,
            "name": "Hot Wheels: Beat That - PRE-OWNED - Nintendo DS",
            "type": "Game",
            "price": 9.99,
            "upc": "799007751908",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Show off your racing skills",
            "manufacturer": "Activision",
            "model": null,
            "url": "http://www.bestbuy.com/site/hot-wheels-beat-that-pre-owned-nintendo-ds/1053196.p?id=1218215103698&skuId=1053196&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053196_sa.jpg"
        },
        {
            "sku": 1053239,
            "name": "Ener-G Horse Riders - PRE-OWNED - Nintendo DS",
            "type": "Game",
            "price": 4.99,
            "upc": "799007752707",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Explore the world with your loyal horse",
            "manufacturer": "Ubisoft",
            "model": null,
            "url": "http://www.bestbuy.com/site/ener-g-horse-riders-pre-owned-nintendo-ds/1053239.p?id=1218215100283&skuId=1053239&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053239_sa.jpg"
        },
        {
            "sku": 1053381,
            "name": "NBA 2K10 - PRE-OWNED - PlayStation 3",
            "type": "Game",
            "price": 4.99,
            "upc": "799007781172",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Live out the pro basketball experience with stunning realism",
            "manufacturer": "2K",
            "model": null,
            "url": "http://www.bestbuy.com/site/nba-2k10-pre-owned-playstation-3/1053381.p?id=1218215101897&skuId=1053381&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053381_sa.jpg"
        },
        {
            "sku": 1053414,
            "name": "Pokémon Platinum Version - PRE-OWNED - Nintendo DS",
            "type": "Game",
            "price": 19.99,
            "upc": "799007781189",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Put a stop to Team Galactic's villainous plot",
            "manufacturer": "Nintendo",
            "model": "4549674017",
            "url": "http://www.bestbuy.com/site/pokemon-platinum-version-pre-owned-nintendo-ds/1053414.p?id=1218215103961&skuId=1053414&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053414_sc.jpg"
        },
        {
            "sku": 1053432,
            "name": "Petz Hamsterz 2 - PRE-OWNED - Nintendo DS",
            "type": "Game",
            "price": 9.99,
            "upc": "799007781202",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "These critters are so darned cute",
            "manufacturer": "Ubisoft",
            "model": null,
            "url": "http://www.bestbuy.com/site/petz-hamsterz-2-pre-owned-nintendo-ds/1053432.p?id=1218215102494&skuId=1053432&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053432_sa.jpg"
        },
        {
            "sku": 1053441,
            "name": "American DJ - Pro-Clamp",
            "type": "HardGood",
            "price": 19.99,
            "upc": "896312003903",
            "category": [
                {
                    "id": "abcat0207000",
                    "name": "Musical Instruments"
                },
                {
                    "id": "pcmcat152100050027",
                    "name": "DJ & Lighting Equipment"
                },
                {
                    "id": "pcmcat152100050032",
                    "name": "DJ Lighting & Effects"
                }
            ],
            "shipping": 5.49,
            "description": "From our expanded online assortment; 360&#176; wraparound tube truss clamp; 2\" diameter; M10 bolt; 1,000 lb. weight capacity",
            "manufacturer": "American DJ",
            "model": "Pro Clamp",
            "url": "http://www.bestbuy.com/site/american-dj-pro-clamp/1053441.p?id=1218215100745&skuId=1053441CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053441_sa.jpg"
        },
        {
            "sku": 1053469,
            "name": "American DJ - Narrow Pro-Clamp",
            "type": "HardGood",
            "price": 19.99,
            "upc": "896312003897",
            "category": [
                {
                    "id": "abcat0207000",
                    "name": "Musical Instruments"
                },
                {
                    "id": "pcmcat152100050020",
                    "name": "Recording Equipment"
                },
                {
                    "id": "pcmcat205700050037",
                    "name": "Recording Furniture & Stands"
                },
                {
                    "id": "pcmcat251600050005",
                    "name": "Recording & Music Stands"
                }
            ],
            "shipping": 5.49,
            "description": "From our expanded online assortment; 2\" wraparound clamp; medium-duty design; 350 lb. weight capacity",
            "manufacturer": "American DJ",
            "model": "Narrow Clamp",
            "url": "http://www.bestbuy.com/site/american-dj-narrow-pro-clamp/1053469.p?id=1218215101666&skuId=1053469CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053469_sa.jpg"
        },
        {
            "sku": 1053736,
            "name": "HP - 971 Ink Cartridge - Cyan",
            "type": "HardGood",
            "price": 78.99,
            "upc": "887111103178",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat275600050000",
                    "name": "Office & School Supplies"
                },
                {
                    "id": "abcat0807000",
                    "name": "Printer Ink & Toner"
                },
                {
                    "id": "abcat0807001",
                    "name": "Printer Ink"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select HP Officejet Pro printers; cyan ink; yields up to 2,500 pages",
            "manufacturer": "HP",
            "model": "CN622AM",
            "url": "http://www.bestbuy.com/site/hp-971-ink-cartridge-cyan/1053736.p?id=1219045593702&skuId=1053736&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053736_sa.jpg"
        },
        {
            "sku": 1053854,
            "name": "HP - 971 Ink Cartridge - Magenta",
            "type": "HardGood",
            "price": 78.99,
            "upc": "887111103185",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat275600050000",
                    "name": "Office & School Supplies"
                },
                {
                    "id": "abcat0807000",
                    "name": "Printer Ink & Toner"
                },
                {
                    "id": "abcat0807001",
                    "name": "Printer Ink"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select HP Officejet Pro printers; magenta ink; yields up to 2,500 pages",
            "manufacturer": "HP",
            "model": "CN623AM",
            "url": "http://www.bestbuy.com/site/hp-971-ink-cartridge-magenta/1053854.p?id=1219045591578&skuId=1053854&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053854_sa.jpg"
        },
        {
            "sku": 1053872,
            "name": "HP - 971 Ink Cartridge - Yellow",
            "type": "HardGood",
            "price": 78.99,
            "upc": "887111103192",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "pcmcat275600050000",
                    "name": "Office & School Supplies"
                },
                {
                    "id": "abcat0807000",
                    "name": "Printer Ink & Toner"
                },
                {
                    "id": "abcat0807001",
                    "name": "Printer Ink"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select HP Officejet Pro printers; yellow ink; yields up to 2,500 pages",
            "manufacturer": "HP",
            "model": "CN624AM",
            "url": "http://www.bestbuy.com/site/hp-971-ink-cartridge-yellow/1053872.p?id=1219045593832&skuId=1053872&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1053/1053872_sa.jpg"
        },
        {
            "sku": 1054547,
            "name": "Livescribe - Livescribe Quick Control Calculator Cards",
            "type": "HardGood",
            "price": 5.99,
            "upc": "799366693437",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0805000",
                    "name": "Office Electronics"
                },
                {
                    "id": "pcmcat193100050011",
                    "name": "Digital Pens & Accessories"
                }
            ],
            "shipping": 5.49,
            "description": "Fit a world of mathematical knowledge into your wallet",
            "manufacturer": "Livescribe",
            "model": "LIVESCRIBE",
            "url": "http://www.bestbuy.com/site/livescribe-livescribe-quick-control-calculator-cards/1054547.p?id=1218215100675&skuId=1054547&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1054/1054547_sa.jpg"
        },
        {
            "sku": 1057028,
            "name": "Razer - 5.1-Channel Soundbar System with Subwoofer - Black",
            "type": "HardGood",
            "price": 199.99,
            "upc": "811254025189",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0515000",
                    "name": "Computer Accessories & Peripherals"
                },
                {
                    "id": "abcat0515039",
                    "name": "Computer Speakers"
                }
            ],
            "shipping": 0,
            "description": "30W RMS power; dedicated subwoofer; surround sound; Bluetooth 4.0; aptX codec; 3 preset equalizer modes",
            "manufacturer": "Razer",
            "model": "RZ05-01260100-R3U1",
            "url": "http://www.bestbuy.com/site/razer-5-1-channel-soundbar-system-with-subwoofer-black/1057028.p?id=1219461499589&skuId=1057028&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1057/1057028_sa.jpg"
        },
        {
            "sku": 1057073,
            "name": "Isaac Mizrahi New York - Folio Case for Apple® iPad® Air and iPad Air 2 - Navy/Pink/White/Yellow",
            "type": "HardGood",
            "price": 39.99,
            "upc": "5031300088165",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "pcmcat309900050001",
                    "name": "iPad & Tablet Accessories"
                },
                {
                    "id": "pcmcat242000050002",
                    "name": "Cases, Covers & Keyboard Folios"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Apple iPad Air and iPad Air 2; folio case; protects your device from damage; floral design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8816",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-folio-case-for-apple-ipad-air-and-ipad-air-2-navy-pink-white-yellow/1057073.p?id=1219461497665&skuId=1057073&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1057/1057073_sa.jpg"
        },
        {
            "sku": 1057082,
            "name": "Isaac Mizrahi New York - Hard Shell Case for Apple° iPhone° SE, 5s and 5 - Pink",
            "type": "HardGood",
            "price": 4.99,
            "upc": "5031300084600",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Apple iPhone SE, 5s and 5; polycarbonate and TPU construction; play-through design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8460",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-hard-shell-case-for-apple-iphone-se-5s-and-5-pink/1057082.p?id=1219461889371&skuId=1057082&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/pac/products/1312/1312657746/1312657746_sa.jpg"
        },
        {
            "sku": 1057091,
            "name": "Isaac Mizrahi New York - Hard Shell Case for Samsung Galaxy S 5 Cell Phones - Pink",
            "type": "HardGood",
            "price": 4.99,
            "upc": "5031300089247",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Samsung Galaxy S 5 cell phones; polycarbonate and TPU construction; play-through design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8924",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-hard-shell-case-for-samsung-galaxy-s-5-cell-phones-pink/1057091.p?id=1219461892690&skuId=1057091&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1057/1057091_sa.jpg"
        },
        {
            "sku": 1057106,
            "name": "Isaac Mizrahi New York - Hard Shell Case for Apple° iPhone° 6 and 6s - Black/Gold",
            "type": "HardGood",
            "price": 9.99,
            "upc": "5031300084549",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                },
                {
                    "id": "pcmcat344600050001",
                    "name": "iPhone 6 Cases"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Apple iPhone 6 and 6s; polycarbonate shell; inner TPU construction; play-through design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8454",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-hard-shell-case-for-apple-iphone-6-and-6s-black-gold/1057106.p?id=1219461890704&skuId=1057106&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1057/1057106_sa.jpg"
        },
        {
            "sku": 1057142,
            "name": "Isaac Mizrahi New York - Hard Shell Case for Samsung Galaxy S 5 Cell Phones - Navy/Pink/White",
            "type": "HardGood",
            "price": 4.99,
            "upc": "5031300089230",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "abcat0811006",
                    "name": "Cell Phone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Samsung Galaxy S 5 cell phones; polycarbonate and TPU construction; play-through design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8923",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-hard-shell-case-for-samsung-galaxy-s-5-cell-phones-navy-pink-white/1057142.p?id=1219461891066&skuId=1057142&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1057/1057142_sa.jpg"
        },
        {
            "sku": 1057188,
            "name": "Isaac Mizrahi New York - Hard Shell Case for Apple° iPhone° SE, 5s and 5 - Navy/Pink/White",
            "type": "HardGood",
            "price": 4.99,
            "upc": "5031300084594",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "Only at Best Buy\nCompatible with Apple iPhone SE, 5s and 5; polycarbonate and TPU construction; play-through design",
            "manufacturer": "Isaac Mizrahi New York",
            "model": "CO8459",
            "url": "http://www.bestbuy.com/site/isaac-mizrahi-new-york-hard-shell-case-for-apple-iphone-se-5s-and-5-navy-pink-white/1057188.p?id=1219461890703&skuId=1057188&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/pac/products/1312/1312657739/1312657739_sa.jpg"
        },
        {
            "sku": 1059533,
            "name": "KitchenAid - 30\" Built-In Gas Cooktop - Silver",
            "type": "HardGood",
            "price": 1599.99,
            "upc": "883049202471",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0904000",
                    "name": "Ranges, Cooktops & Ovens"
                },
                {
                    "id": "abcat0904001",
                    "name": "Cooktops"
                }
            ],
            "shipping": "",
            "description": "Front controls; 4 sealed burners; 900-15,000 BTU burner range; simmer burner",
            "manufacturer": "KitchenAid",
            "model": "KGCD807XSS",
            "url": "http://www.bestbuy.com/site/kitchenaid-30-built-in-gas-cooktop-silver/1059533.p?id=1218214389352&skuId=1059533&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1059/1059533_sa.jpg"
        },
        {
            "sku": 1063087,
            "name": "APC - Smart-UPS 2200VA Tower UPS",
            "type": "HardGood",
            "price": 889.99,
            "upc": "731304268697",
            "category": [
                {
                    "id": "abcat0500000",
                    "name": "Computers & Tablets"
                },
                {
                    "id": "abcat0515000",
                    "name": "Computer Accessories & Peripherals"
                },
                {
                    "id": "abcat0515042",
                    "name": "Surge Protectors & Power"
                },
                {
                    "id": "abcat0515043",
                    "name": "Battery Backup (UPS)"
                }
            ],
            "shipping": 0,
            "description": "2.20 kVA/1.98 kWTower - 8 x NEMA 5-20R - , 2 x NEMA 5-15R",
            "manufacturer": "APC",
            "model": "SMT2200",
            "url": "http://www.bestbuy.com/site/apc-smart-ups-2200va-tower-ups/1063087.p?id=1218215153665&skuId=1063087&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1063/1063087_sa.jpg"
        },
        {
            "sku": 1063448,
            "name": "Brother - IntelliFAX Laser Multifunction Printer - Monochrome - Plain Paper Print - Desktop",
            "type": "HardGood",
            "price": 899.99,
            "upc": "012502602842",
            "category": [
                {
                    "id": "pcmcat128500050004",
                    "name": "Name Brands"
                },
                {
                    "id": "pcmcat152600050013",
                    "name": "Brother"
                },
                {
                    "id": "pcmcat152600050015",
                    "name": "Brother Fax Machines"
                }
            ],
            "shipping": 0,
            "description": "Copier/Fax/Printer/Scanner - 15 ppm Mono Print - 600 x 600 dpi Print - 15 cpm Mono Copy LCD - 500 sheets Input - Fast Ethernet - USB",
            "manufacturer": "Brother",
            "model": "5750e",
            "url": "http://www.bestbuy.com/site/brother-intellifax-laser-multifunction-printer-monochrome-plain-paper-print-desktop/1063448.p?id=1218215941000&skuId=1063448CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1063/1063448_sa.jpg"
        },
        {
            "sku": 1064012,
            "name": "Incase - Quick Snap Case for Apple® iPhone® 6 - Blue Moon Soft Touch",
            "type": "HardGood",
            "price": 29.99,
            "upc": "650450136554",
            "category": [
                {
                    "id": "pcmcat128500050004",
                    "name": "Name Brands"
                },
                {
                    "id": "pcmcat748301602341",
                    "name": "Incase"
                }
            ],
            "shipping": 0,
            "description": "INCASE Quick Snap Case for Apple iPhone 6: Compatible with Apple iPhone 6; direct access to ports; hard shell construction; snap-on attachment",
            "manufacturer": "Incase",
            "model": "CL69413",
            "url": "http://www.bestbuy.com/site/incase-quick-snap-case-for-apple-iphone-6-blue-moon-soft-touch/1064012.p?id=1219461496029&skuId=1064012&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1064/1064012_sa.jpg"
        },
        {
            "sku": 1064049,
            "name": "PhoneSuit - Elite External Battery Case for Apple® iPhone® SE, 5s and 5 - Silver",
            "type": "HardGood",
            "price": 89.99,
            "upc": "851466002547",
            "category": [
                {
                    "id": "abcat0800000",
                    "name": "Cell Phones"
                },
                {
                    "id": "abcat0811002",
                    "name": "Cell Phone Accessories"
                },
                {
                    "id": "pcmcat191200050015",
                    "name": "iPhone Accessories"
                },
                {
                    "id": "pcmcat214700050000",
                    "name": "iPhone Cases & Clips"
                }
            ],
            "shipping": 0,
            "description": "PHONESUIT Elite External Battery Case for Apple iPhone SE, 5s and 5: Compatible with Apple iPhone SE, 5s and 5; metallic rubber composite material; 2100 mAh lithium-polymer battery; 1-amp output; open contour design; shock-resistant up to 5'; digital buttons",
            "manufacturer": "PhoneSuit",
            "model": "PSELITEIP5S",
            "url": "http://www.bestbuy.com/site/phonesuit-elite-external-battery-case-for-apple-iphone-se-5s-and-5-silver/1064049.p?id=1219461496033&skuId=1064049&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1064/1064049_sa.jpg"
        },
        {
            "sku": 1065243,
            "name": "Frigidaire - 30\" Built-In Electric Cooktop - Black",
            "type": "HardGood",
            "price": 529.99,
            "upc": "057112990217",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0904000",
                    "name": "Ranges, Cooktops & Ovens"
                },
                {
                    "id": "abcat0904001",
                    "name": "Cooktops"
                }
            ],
            "shipping": 24.99,
            "description": "Ready-Select controls; 4 elements; 1200-2500 watts of power",
            "manufacturer": "Frigidaire",
            "model": "Ffec3024lb",
            "url": "http://www.bestbuy.com/site/frigidaire-30-built-in-electric-cooktop-black/1065243.p?id=1218215933169&skuId=1065243&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065243_sa.jpg"
        },
        {
            "sku": 1065298,
            "name": "Rocketfish - Full-Motion TV Wall Mount for Most 26\" - 40\" Flat-Panel TVs - Extends 9.7\" - Black",
            "type": "HardGood",
            "price": 109.99,
            "upc": "600603132209",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0106000",
                    "name": "TV Stands, Mounts & Furniture"
                },
                {
                    "id": "abcat0106004",
                    "name": "TV Mounts"
                }
            ],
            "shipping": 0,
            "description": "Holds most 26\" - 40\" flat-panel TVs weighing up to 60 lbs.; fingertip tilt; tilts, swivels and extends off the wall; durable powdercoat finish",
            "manufacturer": "Rocketfish",
            "model": "RF-TVMFM02",
            "url": "http://www.bestbuy.com/site/rocketfish-full-motion-tv-wall-mount-for-most-26-40-flat-panel-tvs-extends-9-7-black/1065298.p?id=1218216674624&skuId=1065298&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065298_rc.jpg"
        },
        {
            "sku": 1065455,
            "name": "KitchenAid - 30\" Built-In Gas Cooktop - Black",
            "type": "HardGood",
            "price": 1499.99,
            "upc": "883049202464",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0904000",
                    "name": "Ranges, Cooktops & Ovens"
                },
                {
                    "id": "abcat0904001",
                    "name": "Cooktops"
                }
            ],
            "shipping": "",
            "description": "Front controls; 4 sealed burners; 900-15,000 BTU burner range; simmer burner",
            "manufacturer": "KitchenAid",
            "model": "Kgcd807xbl",
            "url": "http://www.bestbuy.com/site/kitchenaid-30-built-in-gas-cooktop-black/1065455.p?id=1218215939802&skuId=1065455&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065455_sa.jpg"
        },
        {
            "sku": 1065552,
            "name": "Rocketfish - Full-Motion TV Wall Mount for Most 13\" - 26\" Flat-Panel TVs - Extends 8\" - Black",
            "type": "HardGood",
            "price": 64.99,
            "upc": "600603132186",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0106000",
                    "name": "TV Stands, Mounts & Furniture"
                },
                {
                    "id": "abcat0106004",
                    "name": "TV Mounts"
                }
            ],
            "shipping": 0,
            "description": "Holds flat-panel TVs up to 26\" and 35 lbs.; fingertip tilt; tilts, swivels and extends off the wall; durable finish",
            "manufacturer": "Rocketfish",
            "model": "RF-TVMFM01",
            "url": "http://www.bestbuy.com/site/rocketfish-full-motion-tv-wall-mount-for-most-13-26-flat-panel-tvs-extends-8-black/1065552.p?id=1218216671936&skuId=1065552&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065552_rc.jpg"
        },
        {
            "sku": 1065561,
            "name": "Rocketfish - Full-Motion TV Wall Mount for Most 40\" - 65\" Flat-Panel TVs - Extends 10.2\" - Black",
            "type": "HardGood",
            "price": 199.99,
            "upc": "600603132223",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0106000",
                    "name": "TV Stands, Mounts & Furniture"
                },
                {
                    "id": "abcat0106004",
                    "name": "TV Mounts"
                }
            ],
            "shipping": 0,
            "description": "Holds most 40\" - 65\" flat-panel TVs weighing up to 130 lbs.; fingertip tilt; tilts, swivels and extends off the wall; durable powdercoat finish",
            "manufacturer": "Rocketfish",
            "model": "RF-TVMFM03",
            "url": "http://www.bestbuy.com/site/rocketfish-full-motion-tv-wall-mount-for-most-40-65-flat-panel-tvs-extends-10-2-black/1065561.p?id=1218217269217&skuId=1065561&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065561_rc.jpg"
        },
        {
            "sku": 1065668,
            "name": "Nostalgia Electrics - Electric Quesadilla Maker - Red",
            "type": "HardGood",
            "price": 24.99,
            "upc": "082677218063",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "abcat0912014",
                    "name": "Electric Griddles & Hotplates"
                }
            ],
            "shipping": 7.49,
            "description": "8\" griddle; nonstick coating; unique plate design; removable drip tray; locking 2-position lid; power light",
            "manufacturer": "Nostalgia Electrics",
            "model": "Eqm-200",
            "url": "http://www.bestbuy.com/site/nostalgia-electrics-electric-quesadilla-maker-red/1065668.p?id=1218215931162&skuId=1065668&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065668_rc.jpg"
        },
        {
            "sku": 1065722,
            "name": "Office Star Furniture - Jamestown Pub Table - Brown",
            "type": "HardGood",
            "price": 229.99,
            "upc": "090234195931",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0809000",
                    "name": "Office Furniture & Storage"
                },
                {
                    "id": "pcmcat138200050000",
                    "name": "Office Tables"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; wood and veneer construction; espresso finish; tapered legs",
            "manufacturer": "Office Star Furniture",
            "model": "Jt432",
            "url": "http://www.bestbuy.com/site/office-star-furniture-jamestown-pub-table-brown/1065722.p?id=1218215931091&skuId=1065722CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065722_sa.jpg"
        },
        {
            "sku": 1065786,
            "name": "Office Star Furniture - Westbrook Pub Table - Brown",
            "type": "HardGood",
            "price": 229.99,
            "upc": "090234195894",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0809000",
                    "name": "Office Furniture & Storage"
                },
                {
                    "id": "pcmcat138200050000",
                    "name": "Office Tables"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; wood and veneer construction; espresso finish; drop-leaf table; tapered legs",
            "manufacturer": "Office Star Furniture",
            "model": "Wb432",
            "url": "http://www.bestbuy.com/site/office-star-furniture-westbrook-pub-table-brown/1065786.p?id=1218215942807&skuId=1065786CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065786_sa.jpg"
        },
        {
            "sku": 1065804,
            "name": "RCA - 25255RE2 2-Line DECT 6.0 Expandable Corded/Cordless Phone System - Black",
            "type": "HardGood",
            "price": 149.99,
            "upc": "845679000018",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802002",
                    "name": "Corded Telephones"
                }
            ],
            "shipping": 0,
            "description": "Expandable corded base station; 1 DECT 6.0 cordless handset",
            "manufacturer": "RCA",
            "model": "25255RE2",
            "url": "http://www.bestbuy.com/site/rca-25255re2-2-line-dect-6-0-expandable-corded-cordless-phone-system-black/1065804.p?id=1218215935628&skuId=1065804&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065804_rc.jpg"
        },
        {
            "sku": 1065831,
            "name": "RCA - 25425RE1 Corded Expandable Phone System with Digital Answering System - Black/Gray",
            "type": "HardGood",
            "price": 134.99,
            "upc": "044319703030",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802002",
                    "name": "Corded Telephones"
                }
            ],
            "shipping": 0,
            "description": "Expandable corded base station; call-waiting caller ID; 2-way recording; speakerphone; one-touch dialer; mute, redial and flash functions",
            "manufacturer": "RCA",
            "model": "25425RE1",
            "url": "http://www.bestbuy.com/site/rca-25425re1-corded-expandable-phone-system-with-digital-answering-system-black-gray/1065831.p?id=1218215939731&skuId=1065831&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065831_rc.jpg"
        },
        {
            "sku": 1065859,
            "name": "RCA - 25055RE1 DECT 6.0 Digital Cordless Expansion Handset - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "845679000025",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802001",
                    "name": "Cordless Telephones"
                },
                {
                    "id": "pcmcat159300050003",
                    "name": "Expansion Handsets"
                }
            ],
            "shipping": 0,
            "description": "Cordless expansion handset; DECT 6.0 digital technology; 2-line access",
            "manufacturer": "RCA",
            "model": "25055RE1",
            "url": "http://www.bestbuy.com/site/rca-25055re1-dect-6-0-digital-cordless-expansion-handset-black/1065859.p?id=1218215941825&skuId=1065859&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065859_rc.jpg"
        },
        {
            "sku": 1065868,
            "name": "RCA - 25201RE1 Corded Speakerphone - Black",
            "type": "HardGood",
            "price": 39.99,
            "upc": "044319805772",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802002",
                    "name": "Corded Telephones"
                }
            ],
            "shipping": 0,
            "description": "2-line corded speakerphone; call-waiting caller ID; voicemail waiting indicator; line status visual indicators; 2-line conferencing",
            "manufacturer": "RCA",
            "model": "25201RE1",
            "url": "http://www.bestbuy.com/site/rca-25201re1-corded-speakerphone-black/1065868.p?id=1218216030887&skuId=1065868&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065868_rc.jpg"
        },
        {
            "sku": 1065877,
            "name": "RCA - 25424RE1 Corded Expandable Phone System - Black/Gray",
            "type": "HardGood",
            "price": 129.99,
            "upc": "044319703023",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802002",
                    "name": "Corded Telephones"
                }
            ],
            "shipping": 0,
            "description": "Expandable corded base station; call-waiting caller ID; privacy setting; speakerphone; one-touch dialer; mute, redial and flash functions",
            "manufacturer": "RCA",
            "model": "25424RE1",
            "url": "http://www.bestbuy.com/site/rca-25424re1-corded-expandable-phone-system-black-gray/1065877.p?id=1218215931726&skuId=1065877&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065877_rc.jpg"
        },
        {
            "sku": 1065886,
            "name": "RCA - 25214 2-Line Corded Full-Duplex Speakerphone - Black",
            "type": "HardGood",
            "price": 79.99,
            "upc": "845679000339",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802002",
                    "name": "Corded Telephones"
                }
            ],
            "shipping": 0,
            "description": "2-line corded full-duplex speakerphone; call-waiting caller ID; voicemail system; one-touch dialer; visual line status indicators",
            "manufacturer": "RCA",
            "model": "25214",
            "url": "http://www.bestbuy.com/site/rca-25214-2-line-corded-full-duplex-speakerphone-black/1065886.p?id=1218215933644&skuId=1065886&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065886_rc.jpg"
        },
        {
            "sku": 1065904,
            "name": "RCA - H5401RE1 DECT 6.0 Digital Cordless Expansion Handset - Black",
            "type": "HardGood",
            "price": 79.99,
            "upc": "044319703047",
            "category": [
                {
                    "id": "pcmcat312300050015",
                    "name": "Connected Home & Housewares"
                },
                {
                    "id": "abcat0802000",
                    "name": "Telephones & Communication"
                },
                {
                    "id": "abcat0802001",
                    "name": "Cordless Telephones"
                },
                {
                    "id": "pcmcat159300050003",
                    "name": "Expansion Handsets"
                }
            ],
            "shipping": 0,
            "description": "Cordless expansion handset; DECT 6.0 digital technology; 4-line access; 50-record name and number directory; up to 3-way conferencing; tri-lingual message display",
            "manufacturer": "RCA",
            "model": "H5401RE1",
            "url": "http://www.bestbuy.com/site/rca-h5401re1-dect-6-0-digital-cordless-expansion-handset-black/1065904.p?id=1218215942037&skuId=1065904&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1065/1065904_rc.jpg"
        },
        {
            "sku": 1066001,
            "name": "Freedom Wars - PRE-OWNED - PS Vita",
            "type": "Game",
            "price": 4.99,
            "upc": "799007840404",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Complete dangerous missions in a dystopian world to earn your freedom",
            "manufacturer": "Sony",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/freedom-wars-pre-owned-ps-vita/1066001.p?id=1219461502691&skuId=1066001&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1066/1066001_sa.jpg"
        },
        {
            "sku": 1066075,
            "name": "Grace Digital - Internet Radio - Wi-Fi - Black",
            "type": "HardGood",
            "price": 189.99,
            "upc": "893153002386",
            "category": [
                {
                    "id": "abcat0200000",
                    "name": "Audio"
                },
                {
                    "id": "pcmcat241600050001",
                    "name": "Home Audio"
                },
                {
                    "id": "pcmcat186600050004",
                    "name": "Wireless & Multiroom Audio"
                },
                {
                    "id": "pcmcat309300050001",
                    "name": "Wireless & Multiroom Components"
                }
            ],
            "shipping": 0,
            "description": "10 Channel(s) - AIFF, WAV, MP3, AAC, Ogg Vorbis, FLAC, WMA, RealAudio, OGG, AIFC, CAF, ... - Ethernet - USB",
            "manufacturer": "Grace Digital",
            "model": "GDI-IRDT200",
            "url": "http://www.bestbuy.com/site/grace-digital-internet-radio-wi-fi-black/1066075.p?id=1218215931360&skuId=1066075&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1066/1066075_sa.jpg"
        },
        {
            "sku": 1066224,
            "name": "SanDisk - Extreme PLUS 16GB High-Definition Secure Digital High Capacity (SDHC) Memory Card - Black/Gold",
            "type": "HardGood",
            "price": 49.99,
            "upc": "619659136055",
            "category": [
                {
                    "id": "abcat0400000",
                    "name": "Cameras & Camcorders"
                },
                {
                    "id": "abcat0404000",
                    "name": "Memory Cards"
                },
                {
                    "id": "pcmcat225800050009",
                    "name": "All Memory Cards"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most Secure Digital High Capacity supporting digital cameras and camcorders; stores videos and still images; writeable label",
            "manufacturer": "SanDisk",
            "model": "SDSDXSF-016G-ANCIN",
            "url": "http://www.bestbuy.com/site/sandisk-extreme-plus-16gb-high-definition-secure-digital-high-capacity-sdhc-memory-card-black-gold/1066224.p?id=1218216030373&skuId=1066224&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1066/1066224_sa.jpg"
        },
        {
            "sku": 1066515,
            "name": "DJ Hero 2 - Other",
            "type": "Game",
            "price": 29.99,
            "upc": "047875962378",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "abcat0701000",
                    "name": "Xbox 360"
                },
                {
                    "id": "abcat0701002",
                    "name": "Xbox 360 Games"
                }
            ],
            "shipping": 3.99,
            "description": "Entertainment Retail - Xbox 360",
            "manufacturer": "Activision",
            "model": "96172",
            "url": "http://www.bestbuy.com/site/dj-hero-2-other/1066515.p?id=1218216675087&skuId=1066515&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1066/1066515_sa.jpg"
        },
        {
            "sku": 1066533,
            "name": "DJ Hero 2 - Nintendo Wii",
            "type": "Game",
            "price": 29.99,
            "upc": "047875962392",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "abcat0706000",
                    "name": "Wii"
                },
                {
                    "id": "abcat0706002",
                    "name": "Wii Games"
                }
            ],
            "shipping": 3.99,
            "description": "Take to the turntable and become the greatest mix master to ever fill the dance floors",
            "manufacturer": "Activision",
            "model": "96180",
            "url": "http://www.bestbuy.com/site/dj-hero-2-nintendo-wii/1066533.p?id=1218216673143&skuId=1066533&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1066/1066533.jpg"
        },
        {
            "sku": 1067046,
            "name": "Teenage Mutant Ninja Turtles: Danger of the Ooze - PRE-OWNED - PlayStation 3",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840411",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Test your ninja skills against Shredder's army of nefarious mutants",
            "manufacturer": "Activision",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/teenage-mutant-ninja-turtles-danger-of-the-ooze-pre-owned-playstation-3/1067046.p?id=1219461500296&skuId=1067046&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1067/1067046_sa.jpg"
        },
        {
            "sku": 1067848,
            "name": "Homefront - Xbox 360",
            "type": "Game",
            "price": 14.99,
            "upc": "752919551455",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "abcat0701000",
                    "name": "Xbox 360"
                },
                {
                    "id": "abcat0701002",
                    "name": "Xbox 360 Games"
                }
            ],
            "shipping": 3.99,
            "description": "Make America the home of the free once more",
            "manufacturer": "THQ",
            "model": "55145",
            "url": "http://www.bestbuy.com/site/homefront-xbox-360/1067848.p?id=1218216672986&skuId=1067848&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1067/1067848_500x500_sa.jpg"
        },
        {
            "sku": 1068018,
            "name": "Teenage Mutant Ninja Turtles: Danger of the Ooze - PRE-OWNED - Xbox 360",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840428",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Test your ninja skills against Shredder's army of nefarious mutants",
            "manufacturer": "Activision",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/teenage-mutant-ninja-turtles-danger-of-the-ooze-pre-owned-xbox-360/1068018.p?id=1219465276857&skuId=1068018&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1068/1068018_sa.jpg"
        },
        {
            "sku": 1071015,
            "name": "GE - Profile Series 25.4 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - High-Gloss White",
            "type": "HardGood",
            "price": 1799.99,
            "upc": "084691260950",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; Turbo Cool setting; adjustable, slide-out spill-proof shelves; adjustable Clear Look door bins; dairy compartment",
            "manufacturer": "GE",
            "model": "PSE25KGHWW",
            "url": "http://www.bestbuy.com/site/ge-profile-series-25-4-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-high-gloss-white/1071015.p?id=1219465276598&skuId=1071015&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071015_sa.jpg"
        },
        {
            "sku": 1071051,
            "name": "GE - 22.5 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Black",
            "type": "HardGood",
            "price": 1449.99,
            "upc": "084691807872",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic touch temperature controls; 4 electronic sensors; 4 fresh-food shelves; 4 fresh-food door bins; dairy compartment; in-the-door can rack; 4 freezer shelves",
            "manufacturer": "GE",
            "model": "GSS23HGHBB",
            "url": "http://www.bestbuy.com/site/ge-22-5-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-black/1071051.p?id=1219465274552&skuId=1071051&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071051_sa.jpg"
        },
        {
            "sku": 1071079,
            "name": "GE - 21.8 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
            "type": "HardGood",
            "price": 1499.99,
            "upc": "084691260820",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "External electronic temperature controls; adjustable slide-out, spill-proof glass shelves; adjustable-humidity and -temperature drawers; Sweet Spot freezer shelf",
            "manufacturer": "GE",
            "model": "GSE22ESHSS",
            "url": "http://www.bestbuy.com/site/ge-21-8-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-stainless-steel/1071079.p?id=1219465274547&skuId=1071079&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071079_sa.jpg"
        },
        {
            "sku": 1071088,
            "name": "GE - Profile Series 28.4 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
            "type": "HardGood",
            "price": 2199.99,
            "upc": "084691807919",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; TurboCool setting; short air tower; adjustable, slide-out spill-proof glass shelves; Clear Look door bins",
            "manufacturer": "GE",
            "model": "PSS28KSHSS",
            "url": "http://www.bestbuy.com/site/ge-profile-series-28-4-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-stainless-steel/1071088.p?id=1219465277744&skuId=1071088&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071088_sa.jpg"
        },
        {
            "sku": 1071097,
            "name": "GE - 20.0 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
            "type": "HardGood",
            "price": 1699.99,
            "upc": "084691260783",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic external temperature controls; 3 electronic sensors; 3 fresh-food shelves; 4 fresh-food door bins; dairy compartment; 3 freezer shelves; 5 freezer door shelves",
            "manufacturer": "GE",
            "model": "GSS20ESHSS",
            "url": "http://www.bestbuy.com/site/ge-20-0-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-stainless-steel/1071097.p?id=1219465274557&skuId=1071097&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071097_sa.jpg"
        },
        {
            "sku": 1071111,
            "name": "GE - 20.0 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Black",
            "type": "HardGood",
            "price": 1499.99,
            "upc": "084691260752",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic external temperature controls; 3 electronic sensors; 3 fresh-food shelves; 4 fresh-food door bins; dairy compartment; 3 freezer shelves; 5 freezer door shelves",
            "manufacturer": "GE",
            "model": "GSS20ETHBB",
            "url": "http://www.bestbuy.com/site/ge-20-0-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-black/1071111.p?id=1219465276856&skuId=1071111&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071111_sa.jpg"
        },
        {
            "sku": 1071139,
            "name": "GE - 22.5 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
            "type": "HardGood",
            "price": 1649.99,
            "upc": "084691807889",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic touch temperature controls; 4 electronic sensors; 4 fresh-food shelves; 4 fresh-food door bins; dairy compartment; in-the-door can rack; 4 freezer shelves",
            "manufacturer": "GE",
            "model": "GSS23HSHSS",
            "url": "http://www.bestbuy.com/site/ge-22-5-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-stainless-steel/1071139.p?id=1219465274548&skuId=1071139&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071139_sa.jpg"
        },
        {
            "sku": 1071148,
            "name": "GE - 20.0 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - White",
            "type": "HardGood",
            "price": 1499.99,
            "upc": "084691260776",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic external temperature controls; 3 electronic sensors; 3 fresh-food shelves; 4 fresh-food door bins; dairy compartment; 3 freezer shelves; 5 freezer door shelves",
            "manufacturer": "GE",
            "model": "GSS20ETHWW",
            "url": "http://www.bestbuy.com/site/ge-20-0-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-white/1071148.p?id=1219465277430&skuId=1071148&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071148_sa.jpg"
        },
        {
            "sku": 1071175,
            "name": "GE - Profile Series 25.4 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - High-Gloss Black",
            "type": "HardGood",
            "price": 1799.99,
            "upc": "084691260943",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; Turbo Cool setting; adjustable, slide-out spill-proof shelves; adjustable Clear Look door bins; dairy compartment",
            "manufacturer": "GE",
            "model": "PSE25KGHBB",
            "url": "http://www.bestbuy.com/site/ge-profile-series-25-4-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-high-gloss-black/1071175.p?id=1219465274554&skuId=1071175&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071175_sa.jpg"
        },
        {
            "sku": 1071184,
            "name": "GE - 20.0 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Bisque",
            "type": "HardGood",
            "price": 1499.99,
            "upc": "084691260769",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic external temperature controls; 3 electronic sensors; 3 fresh-food shelves; 4 fresh-food door bins; dairy compartment; 3 freezer shelves; 5 freezer door shelves",
            "manufacturer": "GE",
            "model": "GSS20ETHCC",
            "url": "http://www.bestbuy.com/site/ge-20-0-cu-ft-side-by-side-refrigerator-with-thru-the-door-ice-and-water-bisque/1071184.p?id=1219465277367&skuId=1071184&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1071/1071184_sa.jpg"
        },
        {
            "sku": 1072005,
            "name": "LG - 30.6 Cu. Ft. French Door Smart Refrigerator - Stainless Steel",
            "type": "HardGood",
            "price": 2699.99,
            "upc": "048231786249",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "LCD membrane temperature controls; Smart Cooling Plus with Fresh Air filter; Glide N' Access sliding shelf; spill-safe shelves; pull-out freezer drawer; SmartPull freezer handle",
            "manufacturer": "LG",
            "model": "LFCS31626S",
            "url": "http://www.bestbuy.com/site/lg-30-6-cu-ft-french-door-smart-refrigerator-stainless-steel/1072005.p?id=1219465276661&skuId=1072005&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1072/1072005_sa.jpg"
        },
        {
            "sku": 1073004,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Monochromatic Stainless Steel",
            "type": "HardGood",
            "price": 749.99,
            "upc": "883049339016",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic temperature controls; wall-to-wall frameless glass shelves; Flexi-Slide bin; humidity-controlled crispers; gallon-size door storage",
            "manufacturer": "Whirlpool",
            "model": "WRT318FZDM",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-monochromatic-stainless-steel/1073004.p?id=1219465274558&skuId=1073004&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073004_sa.jpg"
        },
        {
            "sku": 1073013,
            "name": "Whirlpool - 14.3 Cu. Ft. Top-Freezer Refrigerator - White",
            "type": "HardGood",
            "price": 549.99,
            "upc": "883049359359",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Analog temperature controls; 3 glass shelves; dairy center; deli meat drawer; 1 fixed freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT314TFDW",
            "url": "http://www.bestbuy.com/site/whirlpool-14-3-cu-ft-top-freezer-refrigerator-white/1073013.p?id=1219465274551&skuId=1073013&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073013_sa.jpg"
        },
        {
            "sku": 1073031,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Biscuit",
            "type": "HardGood",
            "price": 649.99,
            "upc": "883049347165",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Electronic temperature controls; 2 adjustable shelves; Flexi-Slide bin; clear, humidity-controlled crispers; gallon door storage; compatible with optional EZ Connect icemaker kit",
            "manufacturer": "Whirlpool",
            "model": "WRT108FZDT",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-biscuit/1073031.p?id=1219465276535&skuId=1073031&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073031_sa.jpg"
        },
        {
            "sku": 1073059,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Monochromatic Stainless Steel",
            "type": "HardGood",
            "price": 799.99,
            "upc": "883049342382",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "ENERGY STAR Certified\nUp-front electronic temperature control; 3 glass shelves; Flexi-Slide bin; clear humidity-controlled crispers; deli meat drawer; dairy center; gallon-size door storage; fixed freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT138FZDM",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-monochromatic-stainless-steel/1073059.p?id=1219465274549&skuId=1073059&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073059_sa.jpg"
        },
        {
            "sku": 1073068,
            "name": "Whirlpool - 16.0 Cu. Ft. Top-Freezer Refrigerator - Biscuit",
            "type": "HardGood",
            "price": 599.99,
            "upc": "883049347158",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Interior temperature control dials; 3 glass and wire shelves; deli meat drawer; dairy center; gallon-size door storage; freezer temperature controls; wire freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT106TFDT",
            "url": "http://www.bestbuy.com/site/whirlpool-16-0-cu-ft-top-freezer-refrigerator-biscuit/1073068.p?id=1219465277564&skuId=1073068&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073068_sa.jpg"
        },
        {
            "sku": 1073077,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Black",
            "type": "HardGood",
            "price": 699.99,
            "upc": "883049339085",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "ENERGY STAR Certified\nElectronic controls; glass and wire shelves; dairy center; deli meat drawer; humidity-controlled crispers; Flexi-Slide bin; gallon door storage; EZ Connect icemaker kit compatible",
            "manufacturer": "Whirlpool",
            "model": "WRT138FZDB",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-black/1073077.p?id=1219465277873&skuId=1073077&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073077_sa.jpg"
        },
        {
            "sku": 1073086,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Monochromatic Stainless Steel",
            "type": "HardGood",
            "price": 749.99,
            "upc": "883049342375",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; 3 glass shelves; Flexi-Slide bin; clear humidity-controlled crispers; gallon-size door storage; dairy center; deli meat drawer; wire freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT108FZDM",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-monochromatic-stainless-steel/1073086.p?id=1219465276415&skuId=1073086&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073086_sa.jpg"
        },
        {
            "sku": 1073095,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - White",
            "type": "HardGood",
            "price": 649.99,
            "upc": "883049326948",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; wall-to-wall frameless glass shelves; humidity-controlled crispers; Flexi-Slide bin; gallon-size door storage",
            "manufacturer": "Whirlpool",
            "model": "WRT318FZDW",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-white/1073095.p?id=1219465277244&skuId=1073095&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073095_sa.jpg"
        },
        {
            "sku": 1073119,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Black",
            "type": "HardGood",
            "price": 649.99,
            "upc": "883049326955",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; wall-to-wall frameless glass shelves; humidity-controlled crispers; Flexi-Slide bin; gallon-size door storage",
            "manufacturer": "Whirlpool",
            "model": "WRT318FZDB",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-black/1073119.p?id=1219465274553&skuId=1073119&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073119_sa.jpg"
        },
        {
            "sku": 1073128,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - White",
            "type": "HardGood",
            "price": 649.99,
            "upc": "883049326924",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; 3 glass shelves; Flexi-Slide bin; clear humidity-controlled crispers; gallon-size door storage; dairy center; deli meat drawer; wire freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT108FZDW",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-white/1073128.p?id=1219465278326&skuId=1073128&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073128_sa.jpg"
        },
        {
            "sku": 1073137,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - White",
            "type": "HardGood",
            "price": 699.99,
            "upc": "883049339092",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "ENERGY STAR Certified\nUp-front electronic temperature controls; glass and wire shelves; humidity-controlled crispers; Flexi-Slide bin; gallon-size door storage",
            "manufacturer": "Whirlpool",
            "model": "WRT138FZDW",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-white/1073137.p?id=1219465277563&skuId=1073137&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073137_sa.jpg"
        },
        {
            "sku": 1073146,
            "name": "Whirlpool - 18.2 Cu. Ft. Top-Freezer Refrigerator - Black",
            "type": "HardGood",
            "price": 649.99,
            "upc": "883049326931",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Up-front electronic temperature controls; 3 glass shelves; Flexi-Slide bin; clear humidity-controlled crispers; gallon-size door storage; dairy center; deli meat drawer; wire freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT108FZDB",
            "url": "http://www.bestbuy.com/site/whirlpool-18-2-cu-ft-top-freezer-refrigerator-black/1073146.p?id=1219465274555&skuId=1073146&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073146_sa.jpg"
        },
        {
            "sku": 1073155,
            "name": "Whirlpool - 14.3 Cu. Ft. Top-Freezer Refrigerator - Black",
            "type": "HardGood",
            "price": 549.99,
            "upc": "883049359342",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0901000",
                    "name": "Refrigerators"
                },
                {
                    "id": "pcmcat367400050001",
                    "name": "All Refrigerators"
                }
            ],
            "shipping": "",
            "description": "Analog temperature controls; glass shelves; dairy center, deli meat drawer; fixed wire freezer shelf",
            "manufacturer": "Whirlpool",
            "model": "WRT314TFDB",
            "url": "http://www.bestbuy.com/site/whirlpool-14-3-cu-ft-top-freezer-refrigerator-black/1073155.p?id=1219465274550&skuId=1073155&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1073/1073155_sa.jpg"
        },
        {
            "sku": 1074059,
            "name": "Audiovox - 3.5\" TFT-LCD Rear Observation Monitor - Black",
            "type": "HardGood",
            "price": 99.99,
            "upc": "044476052422",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat330300050001",
                    "name": "Car Safety & Convenience"
                },
                {
                    "id": "pcmcat271800050001",
                    "name": "Back-Up & Dash Cameras"
                },
                {
                    "id": "pcmcat330300050002",
                    "name": "Back-Up Cameras"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most back-up cameras; automatically displays camera image when the vehicle is in reverse; RCA video input; 19' wire harness; ABS plastic material",
            "manufacturer": "Audiovox",
            "model": "ACAM350",
            "url": "http://www.bestbuy.com/site/audiovox-3-5-tft-lcd-rear-observation-monitor-black/1074059.p?id=1219054760736&skuId=1074059&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1074/1074059_sa.jpg"
        },
        {
            "sku": 1075002,
            "name": "Air Conflicts: Vietnam - PRE-OWNED - Xbox 360",
            "type": "Game",
            "price": 9.99,
            "upc": "799007840442",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Take to the skies over one of history's deadliest conflicts",
            "manufacturer": "Kalypso",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/air-conflicts-vietnam-pre-owned-xbox-360/1075002.p?id=1219465277493&skuId=1075002&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1075/1075002_sa.jpg"
        },
        {
            "sku": 1076029,
            "name": "Pokémon Art Academy - PRE-OWNED - Nintendo 3DS",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840459",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Learn to draw your favorite Pok&#233;mon with help from Professor Andy",
            "manufacturer": "Nintendo",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/pokemon-art-academy-pre-owned-nintendo-3ds/1076029.p?id=1219465276416&skuId=1076029&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1076/1076029_sa.jpg"
        },
        {
            "sku": 1077019,
            "name": "Bayonetta 2 - PRE-OWNED - Nintendo Wii U",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840466",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Intense action and dynamic battles await you in this climactic sequel",
            "manufacturer": "Nintendo",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/bayonetta-2-pre-owned-nintendo-wii-u/1077019.p?id=1219465278192&skuId=1077019&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1077/1077019_sa.jpg"
        },
        {
            "sku": 1078674,
            "name": "Griffin Technology - iTrip Auto Mobile FM Transmitter - Black/Silver",
            "type": "HardGood",
            "price": 49.99,
            "upc": "685387374496",
            "category": [
                {
                    "id": "abcat0200000",
                    "name": "Audio"
                },
                {
                    "id": "abcat0208007",
                    "name": "iPod & MP3 Player Accessories"
                },
                {
                    "id": "abcat0208031",
                    "name": "FM Transmitters"
                }
            ],
            "shipping": 0,
            "description": "Compatible with mobile phones and Apple iPhone; one-touch setup and tuning; SmartScan; plastic material",
            "manufacturer": "Griffin Technology",
            "model": "NA22049",
            "url": "http://www.bestbuy.com/site/griffin-technology-itrip-auto-mobile-fm-transmitter-black-silver/1078674.p?id=1218217783833&skuId=1078674&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1078/1078674_sa.jpg"
        },
        {
            "sku": 1080517,
            "name": "Disney Fantasia: Music Evolved - PRE-OWNED - Xbox One",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840473",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Prepare for an all-new musical and magical journey through Fantasia",
            "manufacturer": "Disney",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/disney-fantasia-music-evolved-pre-owned-xbox-one/1080517.p?id=1219465277050&skuId=1080517&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1080/1080517_sa.jpg"
        },
        {
            "sku": 1083191,
            "name": "Insignia™ - 12-Cup Coffeemaker - Stainless-Steel/Black",
            "type": "HardGood",
            "price": 39.99,
            "upc": "600603185311",
            "category": [
                {
                    "id": "abcat0900000",
                    "name": "Appliances"
                },
                {
                    "id": "abcat0912000",
                    "name": "Small Kitchen Appliances"
                },
                {
                    "id": "pcmcat367400050002",
                    "name": "Coffee, Tea & Espresso"
                },
                {
                    "id": "abcat0912005",
                    "name": "Coffee Makers"
                },
                {
                    "id": "pcmcat258900050007",
                    "name": "Multi-Cup Coffee Makers"
                }
            ],
            "shipping": 0,
            "description": "Electronic controls; blue backlit LCD; multiple brew functions; automatic pause and serve; delay-brew option; 2-hour auto shutoff",
            "manufacturer": "Insignia™",
            "model": "NS-CMSS6",
            "url": "http://www.bestbuy.com/site/insignia-12-cup-coffeemaker-stainless-steel-black/1083191.p?id=1219465782603&skuId=1083191&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1083/1083191_rc.jpg"
        },
        {
            "sku": 1085002,
            "name": "Disney Fantasia: Music Evolved - PRE-OWNED - Xbox 360",
            "type": "Game",
            "price": 19.99,
            "upc": "799007840480",
            "category": [
                {
                    "id": "abcat0700000",
                    "name": "Video Games"
                },
                {
                    "id": "pcmcat232900050017",
                    "name": "Pre-Owned Games"
                }
            ],
            "shipping": 3.99,
            "description": "Prepare for an all-new musical and magical journey through Fantasia",
            "manufacturer": "Disney",
            "model": "PREOWNED",
            "url": "http://www.bestbuy.com/site/disney-fantasia-music-evolved-pre-owned-xbox-360/1085002.p?id=1219475168863&skuId=1085002&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1085/1085002_sa.jpg"
        },
        {
            "sku": 1085525,
            "name": "Niles - Cat-5 Stereo Audio Balun Wall Mount",
            "type": "HardGood",
            "price": 59.99,
            "upc": "760514013674",
            "category": [
                {
                    "id": "abcat0100000",
                    "name": "TV & Home Theater"
                },
                {
                    "id": "abcat0107000",
                    "name": "TV & Home Theater Accessories"
                },
                {
                    "id": "abcat0107015",
                    "name": "A/V Cables & Connectors"
                },
                {
                    "id": "abcat0107019",
                    "name": "Composite Video Cables"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; compatible with a single Gang J-box or P-ring; 1-Gang Decora design; passive circuitry",
            "manufacturer": "Niles",
            "model": "C5-A2WM",
            "url": "http://www.bestbuy.com/site/niles-cat-5-stereo-audio-balun-wall-mount/1085525.p?id=1218245747970&skuId=1085525CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1085/1085525_rc.jpg"
        },
        {
            "sku": 1085822,
            "name": "Garmin - GPSMAP 78s GPS - Gray",
            "type": "HardGood",
            "price": 299.99,
            "upc": "753759100919",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat156300050006",
                    "name": "Marine & Powersports"
                },
                {
                    "id": "pcmcat156500050038",
                    "name": "Marine GPS & Navigation"
                },
                {
                    "id": "pcmcat231000050009",
                    "name": "Marine GPS"
                }
            ],
            "shipping": 0,
            "description": "Built-in worldwide base map; 2.6\" TFT display; 3-axis electronic compass; barometric altimeter",
            "manufacturer": "Garmin",
            "model": "Gpsmap78s",
            "url": "http://www.bestbuy.com/site/garmin-gpsmap-78s-gps-gray/1085822.p?id=1218218196110&skuId=1085822&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1085/1085822_sa.jpg"
        },
        {
            "sku": 1085877,
            "name": "Garmin - GPSMAP 78 GPS - Gray",
            "type": "HardGood",
            "price": 199.99,
            "upc": "753759100902",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat156300050006",
                    "name": "Marine & Powersports"
                },
                {
                    "id": "pcmcat156500050038",
                    "name": "Marine GPS & Navigation"
                },
                {
                    "id": "pcmcat231000050009",
                    "name": "Marine GPS"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; preloaded worldwide base map; 2.6\" color TFT display; designed for marine use; 1.7GB memory; hunting and fishing calendar; sun and moon information",
            "manufacturer": "Garmin",
            "model": "Gpsmap78",
            "url": "http://www.bestbuy.com/site/garmin-gpsmap-78-gps-gray/1085877.p?id=1218218194247&skuId=1085877&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1085/1085877_sa.jpg"
        },
        {
            "sku": 1086136,
            "name": "Metra - One Farad Digital Capacitor",
            "type": "HardGood",
            "price": 99.99,
            "upc": "086429258253",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050024",
                    "name": "Amp Installation Parts"
                },
                {
                    "id": "pcmcat165900050030",
                    "name": "Fuses & Capacitors"
                }
            ],
            "shipping": 0,
            "description": "Enhances sound quality; digital display",
            "manufacturer": "Metra",
            "model": "TCCAP1D",
            "url": "http://www.bestbuy.com/site/metra-one-farad-digital-capacitor/1086136.p?id=1218220375441&skuId=1086136&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086136_sa.jpg"
        },
        {
            "sku": 1086427,
            "name": "Hal Leonard - Banjo Method Book 1 Instructional Book and CD - Multi",
            "type": "HardGood",
            "price": 16.99,
            "upc": "073999951011",
            "category": [
                {
                    "id": "abcat0207000",
                    "name": "Musical Instruments"
                },
                {
                    "id": "pcmcat152200050014",
                    "name": "Sheet Music & DVDs"
                },
                {
                    "id": "pcmcat251500050009",
                    "name": "Instrument Instructional Books"
                }
            ],
            "shipping": 5.49,
            "description": "From our expanded online assortment; teaches 5-string, bluegrass style; 2 instruction books, 2 cross-referenced supplement books and 1 CD",
            "manufacturer": "Hal Leonard",
            "model": "695101",
            "url": "http://www.bestbuy.com/site/hal-leonard-banjo-method-book-1-instructional-book-and-cd-multi/1086427.p?id=1218218196591&skuId=1086427CC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086427_sa.jpg"
        },
        {
            "sku": 1086481,
            "name": "Metra - Dash Kit for Select 2004-2010 Volkswagen Touareg/ Touareg2 - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429129546",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2004-2010 Volkswagen Touareg vehicles; installs 1 DIN radio into your vehicle's dash; contoured; storage pocket; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-9009",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2004-2010-volkswagen-touareg-touareg2-black/1086481.p?id=1218665534427&skuId=1086481&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086481_rc.jpg"
        },
        {
            "sku": 1086515,
            "name": "Metra - Dash Kit for Select 2008-2012 Honda Accord/Accord Crosstour manual climate controls - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429175000",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008-2012 Honda Accord and most 2010 Honda Crosstour vehicles; lets you install a double DIN radio or 2 single DIN radios",
            "manufacturer": "Metra",
            "model": "99-7874",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2008-2012-honda-accord-accord-crosstour-manual-climate-controls-black/1086515.p?id=1218665527280&skuId=1086515&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086515_rc.jpg"
        },
        {
            "sku": 1086533,
            "name": "Metra - Dash Kit for Select 2010-2015 Honda Insight base model/Insight EX/LX/NAV - Matte Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429199037",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2010-2015 Honda Insight vehicles; DIN, double DIN, ISO and stacked ISO radio provisions; painted design",
            "manufacturer": "Metra",
            "model": "99-7878B",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2010-2015-honda-insight-base-model-insight-ex-lx-nav-matte-black/1086533.p?id=1218665524451&skuId=1086533&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086533_rc.jpg"
        },
        {
            "sku": 1086542,
            "name": "Axxess - Replacement Interface for Select Nonamplified GM Vehicles - Black",
            "type": "HardGood",
            "price": 119.99,
            "upc": "086429158416",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050035",
                    "name": "Interfaces & Converters"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select nonamplified GM vehicles with the GMLAN data bus system; lets you install an aftermarket radio in your vehicle's dash; retains OnStar functionality",
            "manufacturer": "Axxess",
            "model": "GMOS-LAN-03",
            "url": "http://www.bestbuy.com/site/axxess-replacement-interface-for-select-nonamplified-gm-vehicles-black/1086542.p?id=1218665535524&skuId=1086542&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086542_rc.jpg"
        },
        {
            "sku": 1086551,
            "name": "Metra - Double DIN Installation Kit for Most 2008-2009 Toyota Highlander Vehicles - Brown",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429174348",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most non-navigation 2008-2009 Toyota Highlander vehicles; lets you install a double DIN radio or 2 single DIN radios into your vehicle's dash",
            "manufacturer": "Metra",
            "model": "99-8222BR",
            "url": "http://www.bestbuy.com/site/metra-double-din-installation-kit-for-most-2008-2009-toyota-highlander-vehicles-brown/1086551.p?id=1218665525181&skuId=1086551&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086551_rc.jpg"
        },
        {
            "sku": 1086579,
            "name": "Metra - DIN Installation Kit for Select Subaru Impreza and Forester Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429174997",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008-2009 Subaru Impreza and 2009 Subaru Forester vehicles; DIN and ISO mount radio provisions; storage pocket; hardware included",
            "manufacturer": "Metra",
            "model": "99-8902",
            "url": "http://www.bestbuy.com/site/metra-din-installation-kit-for-select-subaru-impreza-and-forester-vehicles-black/1086579.p?id=1218665534181&skuId=1086579&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086579_rc.jpg"
        },
        {
            "sku": 1086588,
            "name": "Metra - Dash Kit for Select 2005-2010 Toyota Avalon - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429143566",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2005-2010 Toyota Avalon vehicles; installs 1 DIN radio into your vehicle's dash; contoured, textured design; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-8215",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2005-2010-toyota-avalon-black/1086588.p?id=1218665531044&skuId=1086588&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086588_rc.jpg"
        },
        {
            "sku": 1086597,
            "name": "Metra - Installation Kit for Most 2007 and Later Hyundai Elantra Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429164462",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2007 and later Hyundai Elantra vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "95-7326",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2007-and-later-hyundai-elantra-vehicles-black/1086597.p?id=1218665527734&skuId=1086597&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086597_sa.jpg"
        },
        {
            "sku": 1086603,
            "name": "Metra - Dash Kit for Select 2010-2015 Toyota 4 Runner - Silver",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429216673",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2010-2015 Toyota 4 Runner vehicles; ISO stacked and double DIN radio provisions; silver finish; pocket",
            "manufacturer": "Metra",
            "model": "99-8227S",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2010-2015-toyota-4-runner-silver/1086603.p?id=1218665527398&skuId=1086603&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086603_rc.jpg"
        },
        {
            "sku": 1086612,
            "name": "Metra - Dash Kit for Select 2007-2010 Hyundai Elantra with factory radio delete plate - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429175604",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2007-2010 Hyundai Elantra vehicles; ISO and DIN radio provisions; storage pocket",
            "manufacturer": "Metra",
            "model": "99-7332",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2007-2010-hyundai-elantra-with-factory-radio-delete-plate-black/1086612.p?id=1218665536352&skuId=1086612&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086612_rc.jpg"
        },
        {
            "sku": 1086621,
            "name": "Metra - Radio Harness for 2005-2010 Toyota Avalon Vehicles - Multicolor",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429158270",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050034",
                    "name": "Deck Harnesses"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; for 2005-2010 Toyota Avalon vehicles; allows you to install an aftermarket car stereo in your vehicle's dash without cutting the factory radio harness",
            "manufacturer": "Metra",
            "model": "70-8215",
            "url": "http://www.bestbuy.com/site/metra-radio-harness-for-2005-2010-toyota-avalon-vehicles-multicolor/1086621.p?id=1218611422700&skuId=1086621&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086621_sa.jpg"
        },
        {
            "sku": 1086649,
            "name": "Metra - Dash Kit for Select 2006-2011 Cadillac DTS/SRX - Charcoal",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429171941",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with select 2006-2011 Cadillac DTS/SRX vehicles; lets you install a double DIN radio or 2 single DIN radios into your vehicle's dash",
            "manufacturer": "Metra",
            "model": "99-2008",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2006-2011-cadillac-dts-srx-charcoal/1086649.p?id=1218665527856&skuId=1086649&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086649_rc.jpg"
        },
        {
            "sku": 1086667,
            "name": "Metra - Dash Kit for Select 2003-2011 Lincoln Town Car - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429123711",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2003-2011 Lincoln Town Car vehicles; installs a DIN radio into your vehicle's dash; ISO support system; contoured; storage pocket; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-5810",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2003-2011-lincoln-town-car-black/1086667.p?id=1218665523420&skuId=1086667&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086667_rc.jpg"
        },
        {
            "sku": 1086676,
            "name": "Metra - Amplifier Bypass Harness for 2003 Honda Element Vehicles - Gray",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429115037",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050024",
                    "name": "Amp Installation Parts"
                },
                {
                    "id": "pcmcat165900050025",
                    "name": "Amp Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with 2003 Honda Element vehicles; allows you to install an aftermarket radio in your vehicle",
            "manufacturer": "Metra",
            "model": "70-1726",
            "url": "http://www.bestbuy.com/site/metra-amplifier-bypass-harness-for-2003-honda-element-vehicles-gray/1086676.p?id=1218665537131&skuId=1086676&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086676_sa.jpg"
        },
        {
            "sku": 1086685,
            "name": "Metra - Dash Kit for Select 2008-2012 Honda Accord/Accord Crosstour non-NAV with auto climate controls - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429175017",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008-2012 Honda Accord vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash",
            "manufacturer": "Metra",
            "model": "99-7875",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2008-2012-honda-accord-accord-crosstour-non-nav-with-auto-climate-controls-black/1086685.p?id=1218665528577&skuId=1086685&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086685_rc.jpg"
        },
        {
            "sku": 1086694,
            "name": "Metra - Amplifier Bypass for 2006 Honda Civic Vehicles - Multicolor",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429160327",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050024",
                    "name": "Amp Installation Parts"
                },
                {
                    "id": "pcmcat165900050025",
                    "name": "Amp Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with 2006 Honda Civic vehicles; bypasses your vehicle's factory-installed amplifier",
            "manufacturer": "Metra",
            "model": "70-1727",
            "url": "http://www.bestbuy.com/site/metra-amplifier-bypass-for-2006-honda-civic-vehicles-multicolor/1086694.p?id=1218665534698&skuId=1086694&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086694_sa.jpg"
        },
        {
            "sku": 1086703,
            "name": "Metra - Double DIN Installation Kit for Most 2008-2011 Nissan Rogue Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429174935",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008-2011 Nissan Rogue vehicles; lets you install a double DIN radio or 2 single DIN radios into your vehicle's dash; hardware included",
            "manufacturer": "Metra",
            "model": "95-7425",
            "url": "http://www.bestbuy.com/site/metra-double-din-installation-kit-for-most-2008-2011-nissan-rogue-vehicles-black/1086703.p?id=1218665522316&skuId=1086703&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086703_sa.jpg"
        },
        {
            "sku": 1086712,
            "name": "Metra - Dash Kit for Select 2003-2011 Honda Element - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429105045",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2003-2011 Honda Element vehicles; ISO and DIN radio provisions; snap-in ISO support system; built-in under-radio pocket",
            "manufacturer": "Metra",
            "model": "99-7863",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2003-2011-honda-element-black/1086712.p?id=1218665527735&skuId=1086712&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086712_rc.jpg"
        },
        {
            "sku": 1086721,
            "name": "Metra - Double DIN Installation Kit for Most 2009 or Later Ford F-150 Vehicles - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429204922",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009 or later Ford F-150 vehicles; double DIN radio provision; painted, scratch-resistant design",
            "manufacturer": "Metra",
            "model": "95-5822B",
            "url": "http://www.bestbuy.com/site/metra-double-din-installation-kit-for-most-2009-or-later-ford-f-150-vehicles-black/1086721.p?id=1218665536037&skuId=1086721&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086721_sa.jpg"
        },
        {
            "sku": 1086758,
            "name": "Metra - Double DIN Installation Kit for Most 2005 or Later Honda Ridgeline Vehicles - Gray",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429190010",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2005 or later Honda Ridgeline vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; painted; hardware included",
            "manufacturer": "Metra",
            "model": "95-7870G",
            "url": "http://www.bestbuy.com/site/metra-double-din-installation-kit-for-most-2005-or-later-honda-ridgeline-vehicles-gray/1086758.p?id=1218665526762&skuId=1086758&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086758_sa.jpg"
        },
        {
            "sku": 1086767,
            "name": "Metra - Installation Kit for Most 2010 and Later Subaru Legacy and Outback Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429213528",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2010 and later Subaru Legacy and Outback models; ISO and DIN radio provisions; painted, scratch-resistant finish",
            "manufacturer": "Metra",
            "model": "99-8903B",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2010-and-later-subaru-legacy-and-outback-vehicles-black/1086767.p?id=1218665536231&skuId=1086767&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086767_sa.jpg"
        },
        {
            "sku": 1086776,
            "name": "Metra - Dash Kit for Select 2006-2012 Toyota RAV4 - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429160891",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with 2006-2012 Toyota RAV4 vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; contoured; ABS plastic construction; hardware included",
            "manufacturer": "Metra",
            "model": "99-8217",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2006-2012-toyota-rav4-black/1086776.p?id=1218665522188&skuId=1086776&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086776_rc.jpg"
        },
        {
            "sku": 1086794,
            "name": "Metra - Dash Kit for Select 2007-2010 Hyundai Elantra non-NAV - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429164455",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2007-2010 Hyundai Elantra vehicles; lets you install 1 DIN radio into your vehicle's dash; quick-release, snap-in ISO mount system; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-7326",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2007-2010-hyundai-elantra-non-nav-black/1086794.p?id=1218665530246&skuId=1086794&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086794_rc.jpg"
        },
        {
            "sku": 1086812,
            "name": "Metra - Dash Kit for Select 2007-2014 Toyota FJ Cruiser - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429160372",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2007-2014 Toyota FJ Cruiser vehicles; ISO and DIN radio provisions; snap-in ISO support system; contoured design; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-8219",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2007-2014-toyota-fj-cruiser-black/1086812.p?id=1218665523278&skuId=1086812&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086812_rc.jpg"
        },
        {
            "sku": 1086821,
            "name": "Metra - Installation Kit for Most 2008 and Later Nissan Titan Vehicles - Silver",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429173235",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008 and later Nissan Titan vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; contoured and textured",
            "manufacturer": "Metra",
            "model": "95-7424",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2008-and-later-nissan-titan-vehicles-silver/1086821.p?id=1218665528126&skuId=1086821&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086821_sa.jpg"
        },
        {
            "sku": 1086849,
            "name": "Metra - Dash Kit for Select 2009-2014 Nissan Murano Non-BOSE/ Non-NAV/ and no Tech pkg ONLY - Charcoal",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429181483",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009-2014 Nissan Murano vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; ISO mount system; contoured design",
            "manufacturer": "Metra",
            "model": "99-7426",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2009-2014-nissan-murano-non-bose-non-nav-and-no-tech-pkg-only-charcoal/1086849.p?id=1218665522059&skuId=1086849&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086849_rc.jpg"
        },
        {
            "sku": 1086858,
            "name": "Metra - Installation Kit for Most 2010 Hyundai Genesis Coupe Vehicles - Silver",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429204946",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2010 Hyundai Genesis Coupe vehicles with auto climate controls; ISO head unit provision; pocket; factory-matching finish",
            "manufacturer": "Metra",
            "model": "99-7336S",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2010-hyundai-genesis-coupe-vehicles-silver/1086858.p?id=1218665535778&skuId=1086858&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086858_sa.jpg"
        },
        {
            "sku": 1086867,
            "name": "Metra - Dash Kit for Select 2007-2012 Hyundai Veracruz Limited - Silver",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429198993",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "From our expanded online assortment; compatible with select 2007-2012 Hyundai Veracruz vehicles; allows installation of a single or double DIN radio into your vehicle's dash; storage pocket",
            "manufacturer": "Metra",
            "model": "99-7335S",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2007-2012-hyundai-veracruz-limited-silver/1086867.p?id=1218551143963&skuId=1086867&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086867_rc.jpg"
        },
        {
            "sku": 1086876,
            "name": "METRA - Vehicle Mount",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429146420",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat165900050054",
                    "name": "More Car Accessories"
                }
            ],
            "shipping": 0,
            "description": "METRA Single/Double DIN Radio Installation Kit",
            "manufacturer": "METRA",
            "model": "99-7869",
            "url": "http://www.bestbuy.com/site/metra-vehicle-mount/1086876.p?id=1218326057901&skuId=1086876&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086876_105x105_sc.jpg"
        },
        {
            "sku": 1086885,
            "name": "Metra - DIN Installation Kit for Most 2005-2009 Honda Ridgeline Vehicles - Gray",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429183104",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2005-2009 Honda Ridgeline vehicles; installs 1 DIN radio into your vehicle's dash; pocket; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "99-7870G",
            "url": "http://www.bestbuy.com/site/metra-din-installation-kit-for-most-2005-2009-honda-ridgeline-vehicles-gray/1086885.p?id=1218665531795&skuId=1086885&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086885_sa.jpg"
        },
        {
            "sku": 1086903,
            "name": "Metra - Dash Kit for Select 2008-2010 Nissan Rogue - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429174942",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2008-2010 Nissan Rogue vehicles; allows you to install a DIN radio into your vehicle's dash; snap-in ISO mount system; contoured, textured design; oversize pocket",
            "manufacturer": "Metra",
            "model": "99-7425",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2008-2010-nissan-rogue-black/1086903.p?id=1218665533472&skuId=1086903&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086903_rc.jpg"
        },
        {
            "sku": 1086912,
            "name": "Metra - Dash Kit for Select 2004-2014 Nissan Titan base model only - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429126040",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2004-2014 Nissan Titan vehicles; ISO and DIN head unit provisions; contoured; ABS plastic design; pocket",
            "manufacturer": "Metra",
            "model": "99-7405",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2004-2014-nissan-titan-base-model-only-black/1086912.p?id=1218665530115&skuId=1086912&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086912_rc.jpg"
        },
        {
            "sku": 1086921,
            "name": "Metra - Installation Kit for Most 2006-2011 Hyundai Azera Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429160860",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2006-2011 Hyundai Azera vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; contoured and textured; hardware included",
            "manufacturer": "Metra",
            "model": "95-7322",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2006-2011-hyundai-azera-vehicles-black/1086921.p?id=1218665536416&skuId=1086921&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086921_sa.jpg"
        },
        {
            "sku": 1086949,
            "name": "Metra - Dash Kit for Select 2009-2012 Nissan Frontier/Xterra with gray dash - Gray",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429186686",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009-2012 Nissan Frontier/Xterra vehicles with tech options; ISO mount, double DIN and DIN radio provisions; pocket",
            "manufacturer": "Metra",
            "model": "99-7428G",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2009-2012-nissan-frontier-xterra-with-gray-dash-gray/1086949.p?id=1218665529080&skuId=1086949&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086949_rc.jpg"
        },
        {
            "sku": 1086958,
            "name": "Metra - Double DIN Installation Kit for Most 2009-2010 Hyundai Sonata Vehicles - Bronze",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429182947",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009-2010 Hyundai Sonata vehicles; lets you install a double DIN radio or 2 single DIN radios into your vehicle's dash; contoured; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "95-7333",
            "url": "http://www.bestbuy.com/site/metra-double-din-installation-kit-for-most-2009-2010-hyundai-sonata-vehicles-bronze/1086958.p?id=1218665521608&skuId=1086958&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086958_sa.jpg"
        },
        {
            "sku": 1086976,
            "name": "Metra - Installation Kit for Most 2009 and Later Nissan Maxima Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429186396",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009 and later Nissan Maxima vehicles; installs a double DIN radio or 2 single DIN radios into your vehicle's dash; quick-release snap-in ISO mount system",
            "manufacturer": "Metra",
            "model": "95-7427B",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2009-and-later-nissan-maxima-vehicles-black/1086976.p?id=1218665535264&skuId=1086976&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086976_sa.jpg"
        },
        {
            "sku": 1086985,
            "name": "Metra - Installation Kit for Most 2003-2011 Lincoln Town Car Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429168033",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2003-2011 Lincoln Town Car vehicles; installs a double DIN radio into your vehicle's dash; ISO support system; contoured; ABS plastic construction",
            "manufacturer": "Metra",
            "model": "95-5810",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2003-2011-lincoln-town-car-vehicles-black/1086985.p?id=1218665528423&skuId=1086985&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1086/1086985_sa.jpg"
        },
        {
            "sku": 1087001,
            "name": "Metra - Installation Kit for Most 2010 or Later Subaru Legacy and Outback Vehicles - Black",
            "type": "HardGood",
            "price": 16.99,
            "upc": "086429213184",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2010 or later Subaru Legacy and Outback models; double DIN and stacked ISO radio provisions; painted, scratch-resistant design",
            "manufacturer": "Metra",
            "model": "95-8903B",
            "url": "http://www.bestbuy.com/site/metra-installation-kit-for-most-2010-or-later-subaru-legacy-and-outback-vehicles-black/1087001.p?id=1218665527151&skuId=1087001&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1087/1087001_sa.jpg"
        },
        {
            "sku": 1087029,
            "name": "Metra - Antenna Adapter for Most 2009 and Later Hyundai and Kia Vehicles - Black",
            "type": "HardGood",
            "price": 13.99,
            "upc": "086429174829",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050032",
                    "name": "Antennas & Adapters"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most 2009 and later Hyundai and Kia vehicles; connects your vehicle's radio cable to an aftermarket antenna; 13-3/4\" length",
            "manufacturer": "Metra",
            "model": "40-KI21",
            "url": "http://www.bestbuy.com/site/metra-antenna-adapter-for-most-2009-and-later-hyundai-and-kia-vehicles-black/1087029.p?id=1218665531554&skuId=1087029&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1087/1087029_rc.jpg"
        },
        {
            "sku": 1087047,
            "name": "Metra - Dash Kit for Select 2008-2012 Toyota Highlander without factory NAV - Black",
            "type": "HardGood",
            "price": 49.99,
            "upc": "086429174331",
            "category": [
                {
                    "id": "abcat0300000",
                    "name": "Car Electronics & GPS"
                },
                {
                    "id": "pcmcat165900050023",
                    "name": "Car Installation Parts & Accessories"
                },
                {
                    "id": "pcmcat331600050007",
                    "name": "Car Audio Installation Parts"
                },
                {
                    "id": "pcmcat165900050031",
                    "name": "Deck Installation Parts"
                },
                {
                    "id": "pcmcat165900050033",
                    "name": "Dash Installation Kits"
                }
            ],
            "shipping": 0,
            "description": "Compatible with most non-navigation 2008-2012 Toyota Highlander vehicles; lets you install a double DIN radio or 2 single DIN radios into your vehicle's dash",
            "manufacturer": "Metra",
            "model": "99-8222",
            "url": "http://www.bestbuy.com/site/metra-dash-kit-for-select-2008-2012-toyota-highlander-without-factory-nav-black/1087047.p?id=1218665531647&skuId=1087047&cmp=RMXCC",
            "image": "http://img.bbystatic.com/BestBuy_US/images/products/1087/1087047_rc.jpg"
        },
    ];
    return productsData;
}

function populateData() {
    allProducts = getData();
    const distinctManufactures = [...new Set(allProducts.map(p => p.manufacturer))];

    for(const distinctManufacture of distinctManufactures ){
        let button = document.createElement("BUTTON");
        button.innerHTML = distinctManufacture;
        button.onclick = function () {
            populateObjects(distinctManufacture);
        };

        document.getElementById("search").appendChild(button); 
    }
}


window.onload = populateData;

function populateObjects(manufacturer) {

    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = '';
    let products = allProducts;
    products = products.filter(product => product.manufacturer == manufacturer);
    filteredProducts = [];
    /*
    for (let k = 0; k < products.length; k++) {
        if (!filteredProducts.includes(products[k])) {
            filteredProducts.push(products[k]);
        }
        products = filteredProducts;
    }
    */

    for (const product of products){
        if(!filteredProducts.includes(product)){
            filteredProducts.push(product);
        }
        products =filteredProducts;
    }

    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        const sku = document.createElement('p');
        sku.textContent = product.sku;
        document.getElementById("data").appendChild(sku);

        const name = document.createElement('p');
        name.textContent = product.name;
        document.getElementById("data").appendChild(name);

        const type = document.createElement('p');
        type.textContent = product.type;
        document.getElementById("data").appendChild(type);

        const price = document.createElement('p');
        price.textContent = product.price;
        document.getElementById("data").appendChild(price);

        const upc = document.createElement('p');
        upc.textContent = product.upc;
        document.getElementById("data").appendChild(upc);

        const category = document.createElement('ul');

        for (let j = 0; j < products[i].category.length; j++) {
            const id = document.createElement('li');
            const name = document.createElement('li');

            id.textContent = product.category[j].id;
            name.textContent = product.category[j].name;

            category.appendChild(id);
            category.appendChild(name);

        }
        document.getElementById("data").appendChild(category);

        const shipping = document.createElement('p');
        shipping.textContent = product.shipping;
        document.getElementById("data").appendChild(shipping);

        const description = document.createElement('p');
        description.textContent = product.description;
        document.getElementById("data").appendChild(description);

        const manufacturer = document.createElement('p');
        manufacturer.textContent = product.manufacturer;
        document.getElementById("data").appendChild(manufacturer);

        const url = document.createElement('p');
        url.textContent = product.url;
        document.getElementById("data").appendChild(url);

        var image = document.createElement('img');
        image.src = product.image;
        document.getElementById("data").appendChild(image);


    }
}
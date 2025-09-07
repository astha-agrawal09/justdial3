import React, { useState, useEffect } from "react";


import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BASE_URL } from "../helper/Helper";



const carouselItems = [
  {
    img: "/banner_hotels.webp",
    background: "#eaf7ff",
  },
  {
    img: "/banner_bills.webp",
    background: "#fff7e6",
  },
  {
    img: "/banner_easemytrip.webp",
    background: "#e8fff1",
  },
  {
    img: "/banner_loans.webp",
    background: "#eaf7ff",
  },
  {
    img: "/banner_hotels.webp",
    background: "#fff7e6",
  },
  {
    img: "/banner_bills.webp",
    background: "#e8fff1",
  },
];

const serviceCards = [
  {
    title: "B2B",
    subtitle: "Quick Quotes",
    background: "#0E77CD",
    img: "/b2b_square_hotkey.webp",
  },
  {
    title: "REPAIRS & SERVICES",
    subtitle: "Get Nearest Vendor",
    background: "#0B5394",
    img: "/repair_square_hotkey.webp",
  },
  {
    title: "REAL ESTATE",
    subtitle: "Finest Agents",
    background: "#6A1B9A",
    img: "/realestate_square_hotkey.webp",
  },
  {
    title: "DOCTORS",
    subtitle: "Book Now",
    background: "#00796B",
    img: "/doctor_square_hotkey.webp",
  },
];




const jdCategories = [
  {
    title: "Wedding Requisites",
    items: [
      { name: "Banquet Halls", img: "/banquethalls.webp" },
      { name: "Bridal Requisite", img: "/bridalrequisite.webp" },
      { name: "Caterers", img: "/caterers.webp" },
    ],
  },
  {
    title: "Beauty & Spa",
    items: [
      { name: "Beauty Parlours", img: "/beautyparlours.webp" },
      { name: "Spa & Massages", img: "/spamassages.webp" },
      { name: "Salons", img: "/salons.webp" },
    ],
  },
  {
    title: "Repairs & Services",
    items: [
      { name: "AC Service", img: "/acrepair.webp" },
      { name: "Car Service", img: "/carservice.webp" },
      { name: "Bike Service", img: "/bikeservice.webp" },
    ],
  },
  {
    title: "Daily Needs",
    items: [
      { name: "Movies", img: "/movies.webp" },
      { name: "Grocery", img: "/grocery.webp" },
      { name: "Electricians", img: "/electricians.webp" },
    ],
  },
];

const jCategories = [
  {
    title: "Bills & Recharge ",
    description: "Pay your bills & recharge instantly with Justdial",
    items: [
      { name: "Mobile", img: "/bt_mobile.svg" },
      { name: "Electricity", img: "/bt_electricity.svg" },
      { name: "DTH", img: "/bt_dth.svg" },
      { name: "Water", img: "public/bt_water.svg" },
      { name: "Gas", img: "public/bt_gas.svg" },
      { name: "Insurance", img: "public/bt_insurance.svg" },
    ],
  },
  {
    title: "Travel Bookings",
    description: "Instant ticket bookings for your best travel experience",
    items: [
      { name: "Flight", img: "public/bt_flight.svg" },
      { name: "Bus", img: "public/bt_bus.svg" },
      { name: "Train", img: "public/bt_train.svg" },
      { name: "Hotel", img: "public/bt_hotels.svg" },
      { name: "Car Rentals", img: "public/bt_carhire.svg" },
    ],
  },
];






function darkenColor(hex, amount = 0.2) {
  let col = hex.replace("#", "");
  if (col.length === 3) col = col.split("").map(c => c + c).join("");

  const num = parseInt(col, 16);
  let r = (num >> 16) - (255 * amount);
  let g = ((num >> 8) & 0x00FF) - (255 * amount);
  let b = (num & 0x0000FF) - (255 * amount);

  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return `rgb(${r}, ${g}, ${b})`;
}


export default function CategorySearchSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const rotatingTexts = [
    <>‘4.7 Crore+’ <span style={{ color: "#0070c0" }}>Businesses</span></>,
    <>‘5.9 Crore+’ <span style={{ color: "#0070c0" }}>Products & Services</span></>,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const [categories, setCategories] = useState([]);

  useEffect(() => {

    try {
      axios.get(`${BASE_URL}/api/categories?populate=*`)
        .then(function (response) {
          // handle success
          console.log(response?.data?.data);
          setCategories(response?.data?.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.log(error);
    }

  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);





  return (
    <Box sx={{ backgroundColor: "#fff", px: 0, py: 3 }}>
      {/* 1. Main Heading */}
      <Box
        sx={{
          height: isMobile ? 32 : 38,
          overflow: "hidden",
          mb: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "start",
            lineHeight: 1.2,
            position: "relative",
            pl: 4.5
          }}
        >
          Search across&nbsp;
          <Box
            sx={{
              display: "inline-block",
              height: isMobile ? 32 : 38,
              overflow: "hidden",
              verticalAlign: "bottom",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.6s ease",
                transform: `translateY(-${currentIndex * (isMobile ? 32 : 38)}px)`,
              }}
            >
              {rotatingTexts.map((text, idx) => (
                <Box key={idx} sx={{ height: isMobile ? 32 : 38 }}>
                  {text}
                </Box>
              ))}
            </Box>
          </Box>
        </Typography>
      </Box>

      {/* 2. Search Fields */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <TextField
          placeholder="Mumbai"
          size="small"
          variant="outlined"
          sx={{ minWidth: 150, pl: 4.5 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnSharpIcon sx={{ color: "#757575" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          placeholder="Search for Spa, Salons..."
          size="small"
          sx={{ minWidth: 450 }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MicIcon sx={{ color: "#0070c0", cursor: "pointer" }} />
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  sx={{ px: 1, minWidth: 20 }}
                >
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* 3. Carousel + Right Cards */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,

        }}
      >
        {/* Left Carousel */}
        <Box
          sx={{
            width: isMobile ? "100%" : "550px",
            height: "240px",
            borderRadius: 2,
            overflow: "hidden",
            pl: 4.5
          }}
        >
          <Slider {...sliderSettings}>
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "240px",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={`carousel-${index}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Right Side Scrollable Service Cards */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            overflowX: "auto",
            gap: 2,
            pb: 1,
          }}
        >
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 170,
                height: 240,
                borderRadius: 2,
                position: "relative",
                flexShrink: 0,
                overflow: "hidden",
                backgroundColor: card.background,
                p: 0,
                cursor: "pointer",
                '&:hover .zoom-img': {
                  transform: 'scale(1.1)',
                },
                '&:hover .zoom-text': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Box
                component="img"
                src={card.img}
                alt={card.title}
                className="zoom-img"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  zIndex: 2,
                  position: 'relative'
                }}
              />
              <Box
                className="zoom-text"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  px: 2,
                  py: 1.5,
                  color: "#fff",
                  zIndex: 1,
                  transition: "transform 0.4s ease",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.subtitle}</Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  zIndex: 3,
                  cursor: "pointer",
                  '& .explore-wrapper': {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: darkenColor(card.background, 0.2),
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    transition: 'all 0.3s ease',
                    px: 1.2,
                    py: 0.2,
                  },
                  '& .explore-text': {
                    fontSize: 13,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    opacity: 0,
                    transform: 'translateX(-10px)',
                    width: 0,
                    color: "#fff",
                  },
                  '& .arrow-icon': {
                    fontSize: 18,
                    transition: 'transform 0.3s ease',
                    color: "#fff",
                  },
                  '&:hover .explore-wrapper': {
                    backgroundColor: "#fff",
                  },
                  '&:hover .explore-text': {
                    opacity: 1,
                    transform: 'translateX(0)',
                    width: 'auto',
                    marginRight: '6px',
                    color: card.background,
                  },
                  '&:hover .arrow-icon': {
                    transform: 'translateX(4px)',
                    color: card.background,
                  },

                }}>
                <Box className="explore-wrapper">
                  <Typography className="explore-text">Explore</Typography>
                  <Typography className="arrow-icon">&gt;</Typography>
                </Box>
              </Box>
            </Card>
          ))}

        </Box>
      </Box>

      {/* 4. Category Grid */}

      <Box sx={{ mt: 4 }}>
        <Grid container sx={{ pl: 4.5, rowGap: 1.5, columnGap: 6 }}>
          {categories && categories.length > 0 && categories.map((cat) => (
            <Grid key={cat.id} sx={{ textAlign: "center" }}>


              {/* Icon Card fixed size */}
              <Card
                sx={{
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                  backgroundColor: "#f8f8f8",
                  "&:hover": { boxShadow: 4, transform: "scale(1.05)" },
                  mx: "auto",

                  border: cat.name === "Popular Categories"
                    ? "1px solid "   // border sirf Wedding Planning ko
                    : "none",

                }}
              >
                <Box
                  component="img"
                  src={`${BASE_URL}${cat.logo?.url}`}
                  alt={cat.name}
                  sx={{ width: 50, height: 50 }}
                />
              </Card>

              {/* Name box same height as card */}
              <Typography
                variant="body2"
                sx={{
                  mt: "14px",
                  width: 79,                // 👈 same as card
                  display: "-webkit-box",
                  WebkitLineClamp: 2,       // max 2 lines
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "center",
                  lineHeight: 1.2,
                  wordBreak: "break-word",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",     // vertical center
                  justifyContent: "center", // horizontal center
                }}
              >
                {cat.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 5. JustDial Style Category Boxes */}
      <Box sx={{ mt: 10, px: 4.5 }}>
        <Grid container spacing={4}>
          {jdCategories.map((cat, idx) => (
            <Grid key={idx}>

              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  p: 3.3,
                  width: 550,
                  background: "#fff",
                }}>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
                >
                  {cat.title}
                </Typography>

                <Grid container spacing={5}>
                  {cat.items.map((item, i) => (
                    <Grid key={i}>
                      <Card
                        sx={{
                          boxShadow: "none",
                          textAlign: "center",
                          cursor: "pointer",
                          "&:hover": { transform: "scale(1.05)" },
                        }}>

                        <Box
                          component="img"
                          src={item.img}
                          alt={item.name}
                          sx={{
                            width: "100%",
                            height: "110px",
                            borderRadius: "6px",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ mt: 1, fontWeight: 500 }}
                        >
                          {item.name}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 5. JustDial Style Category Boxes */}
      <Box sx={{ mt: 4, px: 4.5 }}>
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            p: 5,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Top Category (Bills & Recharge) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            {/* Left side: Title + Description */}
            <Box sx={{ flex: 1 }}>
              {/* Title + Bharat Connect in one row */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                {/* Title */}
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
                  {jCategories[0].title}
                </Typography>

                {/* Small Bharat Connect icon + text */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src="public/bharat_billpay_Newlogo.svg" // Replace with your icon path
                    alt="Connect Icon"
                    sx={{ width: 60, height: 60, mr: 6 }} />

                </Box>
              </Box>

              {/* Description below */}
              <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
                {jCategories[0].description || "Instant services at your fingertips"}
              </Typography>

              {/* Explore More link */}
              <Typography
                variant="body2"
                sx={{
                  color: "#0070c0",
                  fontWeight: "bold",
                  cursor: "pointer",
                  mb: { xs: 2, md: 0 },
                }}
              >
                Explore More
              </Typography>
            </Box>



            {/* Right side: Icons */}
            <Grid container spacing={4} sx={{ flex: 2 }}>
              {jCategories[0].items.map((item, i) => (
                <Grid key={i} sx={{ textAlign: "center" }}>
                  {/* Card with only image */}
                  <Card
                    sx={{
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "12px",
                      p: 1,
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.name}
                      sx={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "12px",
                        objectFit: "contain",
                        mx: "auto",
                      }}
                    />
                  </Card>

                  {/* Name outside card */}
                  <Typography variant="body2" sx={{ fontWeight: 500, mt: 2 }}>
                    {item.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Divider */}
          <Box sx={{ height: "1px", backgroundColor: "#ddd" }} />

          {/* Bottom Category */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              alignItems: "flex-start",
            }}>
            {/* Left side: Title + Description */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                {jCategories[1].title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
                {jCategories[1].description || "Instant services at your fingertips"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#0070c0",
                  fontWeight: "bold",
                  cursor: "pointer",
                  mb: { xs: 2, md: 0 },
                }}>
                Explore More
              </Typography>
            </Box>

            {/* Right side: Icons */}
            <Grid container spacing={4} sx={{ flex: 2 }}>

              {jCategories[1].items.map((item, i) => (

                <Grid key={i} sx={{ textAlign: "center" }}>
                  {/* Card with only image */}
                  <Card
                    sx={{
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "12px",
                      p: 1,
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.name}
                      sx={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "12px",
                        objectFit: "contain",
                        mx: "auto",
                      }}
                    />
                  </Card>

                  {/* Name */}
                  <Typography variant="body2" sx={{ fontWeight: 500, mt: 1 }}>
                    {item.name}
                  </Typography>

                  {/* JustDial style Powered By (only for Flight) */}
                  {item.name === "Flight" && (
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>
                      <Typography variant="caption" sx={{ color: "green", fontWeight: "bold", lineHeight: 0.9 }}>
                        Powered By
                      </Typography>
                      <Typography variant="caption" sx={{ color: "green", fontWeight: "bold", lineHeight: 0.9, mt: 1 }}>
                        Easemytrip.com
                      </Typography>
                    </Box>
                  )}

                  {item.name === "Bus" && (
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>

                      <Typography variant="caption" sx={{ color: "green", fontWeight: "bold", lineHeight: 0.9, mt: 1 }}>
                        Affordable Rides
                      </Typography>
                    </Box>
                  )}

                  {item.name === "Hotel" && (
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>

                      <Typography variant="caption" sx={{ color: "green", fontWeight: "bold", lineHeight: 0.9, mt: 1 }}>
                        Budget-Friendly Stay
                      </Typography>
                    </Box>
                  )}

                  {item.name === "Car Rentals" && (
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>

                      <Typography variant="caption" sx={{ color: "green", fontWeight: "bold", lineHeight: 0.9, mt: 1 }}>
                        Drive Easy Anywhere
                      </Typography>
                    </Box>
                  )}


                </Grid>

              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      
      {/* Trending Searches Near You Section */}
      <Box sx={{ mt: 6, px: 4.5 }}>
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            p: 3,
            background: "#fff",
          }}
        >
          {/* Title + Badge */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
                Trending Searches Near You
              </Typography>

              <Box
                sx={{
                  background: "red",
                  color: "#fff",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                  borderRadius: "4px",
                  fontSize: "11px",
                }}
              >
                NEW
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: "#666" }}>
              Stay updated with the latest local trends.
            </Typography>
          </Box>


          {/* Horizontal Cards */}
          <Box
            sx={{
              display: "flex",
              gap: 5,
              overflowX: "auto",
              pb: 1,
            }}>

            {[
              { name: "Coffee Shops", img: "public/coffee.avif" },
              { name: "B Ed Colleges", img: "public/b.ed.avif" },
              { name: "Sweet Shops", img: "public/sweetshop.avif" },
              { name: "Night Clubs", img: "public/nightlife.avif" },
              { name: "Night Clubs", img: "public/nightlife.avif" },
              { name: "Night Clubs", img: "public/nightlife.avif" },
            ].map((item, i) => (
              <Card
                key={i}
                sx={{
                  display: "flex", // horizontal banane ke liye
                  alignItems: "center",
                  minWidth: 250,
                  borderRadius: "12px",
                  boxShadow: "none",
                  border: "1px solid #EBEBEB",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Left image with hover effect */}
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                    flexShrink: 0,
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>

                {/* Right text */}
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#0070c0", fontWeight: "bold", mt: 0.5 }}
                  >
                    Explore &gt;
                  </Typography>
                </Box>
              </Card>


            ))}
          </Box>
        </Box>
      </Box>


    </Box>
  );
}
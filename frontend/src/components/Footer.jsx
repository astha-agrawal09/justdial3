// src/components/footer.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.100", color: "text.primary", p: 4 }}>
      <Container maxWidth="xl">
        {/* Social + App Buttons */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mb: 3 }}
        >
          <Grid item>
            <Typography variant="body1" sx={{ mr: 2, display: "inline-block" }}>
              Follow us on
            </Typography>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTube />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item sx={{ mt: { xs: 2, md: 0 } }}>
            <Button
              component="a"
              href="https://play.google.com/store"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                height="40"
              />
            </Button>
            <Button
              component="a"
              href="https://www.apple.com/app-store/"
              target="_blank"
              sx={{ p: 0 }}
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                height="40"
              />
            </Button>
          </Grid>
        </Grid>

        {/* Intro Text */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          One-Stop for All Local Businesses, Services, & Stores Nearby Across India
        </Typography>
        <Typography variant="body2" paragraph>
          Welcome to Justdial, your 'one stop shop' where you are assisted with
          day-to-day and exclusive planning and purchasing activities. We take
          pride in our iconic customer support number, 8888888888 and the fact
          that we own a strong hold on local business information pan India...
        </Typography>

        {/* Services Section */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Some of our services that will prove useful to you on a day-to-day basis are:
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: "fas fa-briefcase", title: "B2B", desc: "Explore diverse B2B categories, top vendors, and a wholesale experience." },
            { icon: "fas fa-globe-asia", title: "All India", desc: "Justdial connects businesses across India with digital B2B convenience." },
            { icon: "fas fa-truck-moving", title: "Packers and Movers", desc: "Get the best packers and movers with ratings and quotes." },
            { icon: "fas fa-utensils", title: "Order Food Online", desc: "Browse restaurants, apply discounts, and order meals." },
          ].map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4 }} />

        {/* Quick Links + JD Verticals */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {[
              "About Us",
              "Investor Relations",
              "We're Hiring",
              "Customer Care",
              "Free Listing",
              "What's New",
              "Advertise",
              "Testimonials",
              "Return & Exchange Policy",
            ].map((link, i) => (
              <Typography variant="body2" key={i} sx={{ mb: 0.5 }}>
                {link}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" gutterBottom>
              JD Verticals
            </Typography>
            <Grid container spacing={2}>
              {[
                ["B2B", "Accommodation", "Automobiles", "Education", "Entertainment"],
                ["All India", "Advertising & PR", "Beauty & Personal Care", "Events"],
                ["Doctors", "Agriculture", "Business & Legal", "Electronics"],
                ["Bills & Recharge", "Apparel", "Chemicals", "Furniture", "Travel"],
              ].map((col, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  {col.map((item, j) => (
                    <Typography variant="body2" key={j} sx={{ mb: 0.5 }}>
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Justdial Clone. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
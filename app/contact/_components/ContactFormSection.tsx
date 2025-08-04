"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactFormSection = ({
  isVisible,
  isDark,
}: {
  isVisible: boolean;
  isDark: boolean;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || errorData.message || "Failed to send message"
        );
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while sending the message"
      );
    }
  };

  return (
    <Fade in={isVisible} timeout={2000}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 4,
          background: isDark
            ? "rgba(139, 92, 246, 0.1)"
            : "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
          }`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
            zIndex: -1,
          },
        }}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: isDark ? "#333" : "#fff",
              color: isDark ? "#fff" : "#333",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
            },
          }}
        />

        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            mb: 4,
            textAlign: "center",
          }}>
          Get In Touch
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: "600px",
            mx: "auto",
          }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "rgba(255, 255, 255, 0.9)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.7)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.9)",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "rgba(255, 100, 100, 0.8)",
              },
            }}
          />

          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "rgba(255, 255, 255, 0.9)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.7)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.9)",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "rgba(255, 100, 100, 0.8)",
              },
            }}
          />

          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            {...register("subject")}
            error={!!errors.subject}
            helperText={errors.subject?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "rgba(255, 255, 255, 0.9)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.7)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.9)",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "rgba(255, 100, 100, 0.8)",
              },
            }}
          />

          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "rgba(255, 255, 255, 0.9)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.7)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.9)",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "rgba(255, 100, 100, 0.8)",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              py: { xs: 1.5, sm: 2 },
              px: { xs: 3, sm: 4 },
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 40px rgba(139, 92, 246, 0.4)",
              },
              "&:disabled": {
                opacity: 0.7,
                transform: "none",
                animation: "none",
              },
            }}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 6,
            maxWidth: "600px",
            mx: "auto",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "rgba(255, 255, 255, 0.9)",
            }}>
            <EmailIcon sx={{ fontSize: "1.5rem" }} />
            <Typography>omartemsah99@gmail.com</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "rgba(255, 255, 255, 0.9)",
            }}>
            <PhoneIcon sx={{ fontSize: "1.5rem" }} />
            <Typography>+20 1144396699</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "rgba(255, 255, 255, 0.9)",
            }}>
            <LocationOnIcon sx={{ fontSize: "1.5rem" }} />
            <Typography>New Cairo, First Settlement, Egypt</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 2,
              flexWrap: "wrap",
            }}>
            <IconButton
              href="https://tinyurl.com/O-T-T-Linkedin"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0077b5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0, 119, 181, 0.3)",
                },
              }}>
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href="https://github.com/OmarTemsah99"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#333",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(51, 51, 51, 0.3)",
                },
              }}>
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.facebook.com/share/1Ei3FRxgQT/"
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1877F2",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(24, 119, 242, 0.3)",
                },
              }}>
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/omar_temsah99?igsh=MXc0aDFhM2Vna2JncQ=="
              target="_blank"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(225, 48, 108, 0.3)",
                },
              }}>
              <InstagramIcon />
            </IconButton>

            <Button
              startIcon={<DescriptionIcon />}
              variant="outlined"
              href="https://drive.google.com/uc?export=download&id=1x5b6iSKKLhDnfXukavn4gKB8ZFD4IjQG"
              download
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                fontWeight: 600,
                ml: { xs: 0, sm: 2 },
                mt: { xs: 2, sm: 0 },
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
              }}>
              Download Resume
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactFormSection;

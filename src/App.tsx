import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import theme from "./config/Theme";
import video from "./assets/videos/videoTitle.mp4";

export function App() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "grid" }}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#000",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                boxShadow: 3,
              },
            }}
          >
            <video
              autoPlay
              loop
              muted
              poster="https://studentreasures.com/wp-content/uploads/2020/09/back-view-of-elementary-students-raising-their-hands-on-a-class-picture-id1223141903.jpg"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: 0.5,
                top: 0,
                left: 0,
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
            <Box
              sx={{
                position: "relative",
                float: "right",
                display: "inline-flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "18% 10% 18% 10%",
                margin: "0 auto",
                textShadow: "2px 2px 10px #0000009A",
                color: "#f5f5f5",
              }}
            >
              <h1 style={{ margin: "0 auto", fontSize: 60 }}>SKRU</h1>
              <p style={{ margin: "0 auto", marginTop: "30px", fontSize: 20 }}>
                บริการจัดฝึกอบรมแบบครบวงจรเพื่อการเรียนรู้
              </p>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "30px 15% 30px 15%",
              [theme.breakpoints.down("md")]: { margin: "30px" },
              [theme.breakpoints.down("sm")]: { margin: "30px 10px 30px 10px" },
            }}
          >
            <Card
              sx={{
                display: "flex",
                padding: "2%",
                [theme.breakpoints.down("sm")]: { flexDirection: "column" },
              }}
            >
              <CardMedia
                component="img"
                alt="alt"
                sx={{ height: 200, objectFit: "scale-down" }}
                image="https://sci.skru.ac.th/science/download/formdownload/logo/SciLogoPNG.png"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography variant="body2">
                    &emsp;&emsp;ศูนย์วิทยาศาสตร์ มหาวิทยาลัยราชภัฏสงขลา
                    ได้เปิดบริการการเรียนรู้วิทยาศาสตร์
                    ในรูปแบบการเรียนรู้วิทยาศาสตร์ในชีวิตประจำวัน แก่นักเรียน
                    นักศึกษา และผู้สนใจ
                    โดยจัดเนื้อหาสาระที่สอดคล้องกับสาระการเรียนรู้วิชาวิทยาศาสตร์ทั้ง
                    8 กลุ่มสาระ
                    ซึ่งในการจัดกิจกรรมการเรียนรู้เน้นความรู้บูรณการกับความสนุกสนาน
                    ให้มีการปฏิบัติจริงด้วยตนเองและการลงมือทดลองปฏิบัติทางวิทยาศาสตร์
                    โดยใช้กระบวนการและทักษะทางวิทยาศาสตร์
                    ให้มีความแตกต่างจากการเรียนรู้ในโรงเรียน
                  </Typography>
                  <Typography variant="body2">
                    &emsp;&emsp;ในปี 2562 นี้ ศูนย์วิทยาศาสตร์
                    มหาวิทยาลัยราชภัฏสงขลา
                    ได้จัดกิจกรรมวิทยาศาสตร์น่ารู้เพื่อบริการแก่นักเรียน
                    นักศึกษา และผู้สนใจ ในเนื้อหาที่ครอบคลุมทั้ง 8 สาระ
                    ตามสาระการเรียนรู้ กลุ่มสาระการเรียนรู้วิทยาศาสตร์ ขอเชิญครู
                    อาจารย์ และนักเรียน ร่วมเรียนรู้วิทยาศาสตร์อย่างสนุกสนาน
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

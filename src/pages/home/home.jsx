import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageItem from "../../components/pageItem/pageItem";

const pageStack = [
  {
    page: "chords",
    description:
      "Displays a list of all the ukelele chords you will learn. You can use this page to track your progress.",
  },
  {
    page: "memorize",
    description: "Test how well you have your chords memorized using flashcards.",
  },
  {
    page: "play",
    description: "Practice playing different chords together.",
  },
];

const HomePage = () => {
  return (
    <>
      <Box mb={2}>
        <Typography
          color="default.black"
          variant="h4"
          mt={2}
          sx={{
            textAlign: {
              xs: "center",
              xl: "left",
            },
          }}
        >
          Welcome to <strong>UKECHORDS</strong>,
        </Typography>
        <Typography
          color="default.black"
          variant="subtitle1"
          mt={2}
          sx={{
            textAlign: {
              xs: "center",
              xl: "left",
            },
          }}
        >
          A website designed to help you learn ukelele chords.
        </Typography>
        <Stack spacing={2} mt={2}>
          {pageStack.map((item, index) => (
            <PageItem key={index} index={index} page={item.page} description={item.description} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;

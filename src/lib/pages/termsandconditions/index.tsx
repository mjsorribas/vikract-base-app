import { Grid, Heading, Text } from "@chakra-ui/react";

const TermsAndConditions = () => {
  return (
    <Grid gap={4}>
      <Heading>Terms and Conditions</Heading>
      <Text>
        Use of this digital library resources, datafiles, software and media is
        allowed within the academic context of research, education, and study.
        <br />
        Commercial use of these digital resources is not prohibited but, we
        recommend that any organization or company pay for the Commercial
        license to help us to invest more time in this develop.
        <br />
        Furthermore, there are a number of other terms and conditions of use
        attached to the use of digital library resources, datafiles,
        (consultation) software, and digital media: <br />
        <br />
        <ul>
          <li>
            The use of library resources, datafiles, software, and digital media
            is submitted to standard copyright rules.
          </li>
          <li>
            Publishing licensed materials through the Internet or electronic
            networks is not permitted without naming us.
          </li>
        </ul>
      </Text>
    </Grid>
  );
};

export default TermsAndConditions;

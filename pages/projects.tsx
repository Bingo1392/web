import { Container, createStyles } from "@mantine/core";
import FooterLinks from "@/components/FooterLinks";
import { ProjectsCards } from "@/components/ProjectsCards";
import {
  getConfig,
  Resume,
  transformDateValuesInNestedObject,
} from "@/lib/config";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.xl * 3,
  },
}));

function Projects({ resume }: { resume: Resume }) {
  const { classes } = useStyles();
  return (
    <>
      <Container size={"xl"} className={classes.container}>
        <ProjectsCards projects={resume.projects} />
      </Container>
      <div>
        <FooterLinks />
      </div>
    </>
  );
}

export default Projects;

export const getStaticProps = async () => {
  const config = await getConfig();
  transformDateValuesInNestedObject(config);
  return {
    props: {
      resume: config.resume,
    },
  };
};

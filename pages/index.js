import Button from "../components/Button";
import Container from "../components/Container";
import InfoBox from "../components/InfoBox";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <Container direction="column">
        <Button type="button">Click me!</Button>
        <Button type="button" color="danger">
          Do not click me!
        </Button>
      </Container>
      <Container>
        <p>
          This is a <Link href="/">styled link</Link>.
        </p>
        <p>
          This is a <Link href="/">styled link</Link>.
        </p>
      </Container>
      <Container direction="column">
        <InfoBox title="This is an info" message="Read if carefully!" />
        <InfoBox
          title="It worked"
          message="You have done it!"
          variant="success"
        />
        <InfoBox
          title="Error"
          message="Something went wrong!"
          variant="error"
        />
      </Container>
    </>
  );
}

import Container from '../components/ui/Container.jsx';

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <Container>
        <h1 className="text-6xl">404</h1>
        <p className="mt-4 opacity-70">Page not found.</p>
      </Container>
    </section>
  );
}

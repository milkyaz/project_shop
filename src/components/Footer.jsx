function Footer() {
  return (
    <footer className="page-footer">
      <div className="container"></div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://milkyaz.github.io/project_shop"
            target="_blank"
            rel="noreferrer"
          >
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {
  const {
    toLanguage,
    fromLanguage,
    result,
    fromText,
    setFromLanguage,
    interchangeLanguages,
    setToLanguage,
    setFromText,
    setResult,
    loading,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              placeholder="Introduce Text"
              onChange={setFromText}
              value={fromText}
              loading={loading}
            ></TextArea>
          </Stack>
        </Col>
        <Col xs="auto">
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              value={result}
              placeholder="translate"
              onChange={setResult}
              loading={loading}
            ></TextArea>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

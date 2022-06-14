import React from 'react';
import * as yup from 'yup';
import { setLocale } from 'yup';
import * as formik from 'formik';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function Login() {
  const { Formik } = formik

  setLocale({
    mixed: {
      default: 'Não é válido',
    },
    string: {
      min: 'Deve conter pelo menos 7 caracteres',
    },
  });

  const schema = yup.object().shape({
    nome: yup.string().min(7).required(),
  });

  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
          <Formik
            style={{ textAlign: 'center' }}
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              nome: "",
            }}
          >
            {({ handleSubmit, handleChange, values, isValid, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row style={{ textAlign: "center" }}>
                  <h1>Play Music</h1>
                </Row>

                <Row className="mb-4 justify-content-md-center">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu nome"
                      name="nome"
                      value={values.nome}
                      onChange={handleChange}
                      isInvalid={!!errors.nome}
                      size="lg"
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.nome}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                
                <Row className="mb-3 justify-content-md-center" style={{ textAlign: 'center' }}>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Button type="submit" disabled={!isValid} variant="dark">
                      Entrar
                    </Button>
                  </Form.Group>
                </Row>
              </Form>
            )}
          </Formik>
      </Container>
    </section>
  );
}

export default Login;

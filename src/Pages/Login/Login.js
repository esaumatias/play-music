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
    <Container>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        nome: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
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
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={!isValid}>Submit form</Button>
        </Form>
      )}
    </Formik>
    </Container>
  )
}

export default Login;

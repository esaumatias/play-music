import React, { useContext } from 'react';
import * as yup from 'yup';
import { setLocale } from 'yup';
import * as formik from 'formik';
import { Link } from "react-router-dom";
import AppContex from '../../Context/AppContext';
import {  createUser } from '../../Services/userAPI';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function Login() {
  const { Formik } = formik;
  const { setUser, user, setIsLogged } = useContext(AppContex);

  setLocale({
    mixed: {
      default: 'Não é válido',
    },
    string: {
      min: 'Deve conter pelo menos 3 caracteres',
      required: 'NOME '
    },

  });

  const schema = yup.object().shape({
    nome: yup.string().min(3).required(),
  });

 function createUse(value) {
  createUser({name: value}).then((data) => {
    if (data === 'OK') {
      setIsLogged(true);
    }
  });
 }

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
            {({ handleSubmit, handleChange, values, isValid = true, errors }) => (
              <Form noValidate onClick={() => handleSubmit(setUser(values.nome))}>
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
                    <Button type="button" disabled={!isValid} variant="dark" onClick={() => createUse(user)}>
                      <Link to="/search" style={{ textTransform: 'none', textDecoration: 'none', color: 'white' }}>
                        Entrar
                      </Link>
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

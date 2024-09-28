import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Flex,
  Box,
} from "@chakra-ui/react";
import { createContext, useState } from "react";
import { sendContactForm } from "../../lib/api";
// import Button, { ButtonTypes } from "../common/button";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };
// export const getEmail = () => {
//   return values.email;
// };
// export let userMail = "";
// const UserEmailContext = createContext();
export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  // const [userMail, setUserMail] = useState({})

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const userMail = values.email; // captured email

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userMail }),
    });
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
      const userMail = values.email;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Flex justify="center" align="center" minHeight="100vh" width="100%">
      <Container mt={12} textAlign="center">
        {/* maxW="900px" */}
        <Heading fontSize="30px" padding="10px">
          Contact
        </Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl
          isRequired
          isInvalid={touched.name && !values.name}
          mb={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel textAlign="center" fontSize="25px">
            Name
          </FormLabel>
          <Input
            // width={["100%", "75%", "60%"]}
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            width="350%"
            h="50px"
          />
          <FormErrorMessage
            // textAlign="center"
            // width="75%"
            display="flex"
            justifyContent="center"
            // color="red.300" Need to check global css
          >
            Name is Required
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel textAlign="center" fontSize="25px">
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            width="350%"
            h="50px"
          />
          <FormErrorMessage display="flex" justifyContent="center">
            Email is Required
          </FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.subject && !values.subject}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel textAlign="center" fontSize="25px">
            Subject
          </FormLabel>
          <Input
            type="text"
            name="subject"
            errorBorderColor="red.300"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
            width="350%"
            h="50px"
          />
          <FormErrorMessage display="flex" justifyContent="center">
            Subject is Required
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel textAlign="center" fontSize="25px">
            Message
          </FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            errorBorderColor="red.300"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            width="350%"
            h="100px"
          />
          <FormErrorMessage display="flex" justifyContent="center">
            Message is Required
          </FormErrorMessage>
        </FormControl>
        <Flex justifyContent="center" mb={5}>
          {" "}
          {/* Centering Flex Container for Button */}
          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
            sx={{
              background: `linear-gradient(90deg, #2193b0 0%, #6dd5ed 50%, #2193b0 100%), linear-gradient(0deg, #ffffff, #ffffff)`,
              backgroundSize: "200% 100%", // Size of the gradient background
              transition: "background-position 0.3s ease", // Smooth transition
            }}
            _hover={{
              backgroundPosition: "100% 0", // Change background position on hover
            }}
            paddingY="0.5rem" // Adjust vertical padding
            paddingX="1.75rem" // Adjust horizontal padding
            borderRadius="full" // Adjust border radius if needed
            fontWeight="medium" // Font weight
            fontSize="30px" // Font size
            display="flex" // Display as flex
            // alignItems="center"
          >
            Submit
          </Button>
        </Flex>

        {/* <Button
        classes="mr-3"

        type={ButtonTypes.PRIMARY}
        name="SUBMIT"
        otherProps={{
          target: "_blank",
          rel: "noreferrer",
          onClick: { onSubmit },
        }}
      ></Button> */}
      </Container>
    </Flex>
  );
}

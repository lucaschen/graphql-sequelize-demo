import * as React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";

interface AddChefProps {
  onAddChef: ({ name }: { name: string }) => Promise<void>;
}

const Button = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 300;
  margin-left: 0.5rem;
`;

const TextField = styled.input`
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 300;
`;

const Wrapper = styled.form`
  margin-top: 1rem;
`;

const AddChef = ({ onAddChef: pushAddChef }: AddChefProps) => {
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register,
    reset
  } = useForm<{ name: string }>({ mode: "onChange" });

  const onSubmit = handleSubmit(async ({ name }) => {
    await pushAddChef({ name });
    reset();
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <TextField
        disabled={isSubmitting}
        name="name"
        placeholder="Chef Name"
        ref={register({ required: true })}
        type="text"
      />
      <Button disabled={isSubmitting || !isValid} type="submit">
        Add Chef
      </Button>
    </Wrapper>
  );
};

export default AddChef;

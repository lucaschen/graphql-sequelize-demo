import * as React from "react";
import { useState } from "react";
import useForm from "react-hook-form";
import styled from "styled-components";

interface AddRestaurantProps {
  onAddRestaurant: ({ name: string }) => Promise<void>;
}

type FormData = {
  name: string;
};

const AddRestaurantButton = styled.button`
  border: 1px dashed #aaaaaa;
  color: #555555;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.25em;

  :hover {
    cursor: pointer;
  }
`;

const TextField = styled.input`
  border: 0;
  border-bottom: 0.125rem solid #cccccc;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25em;

  :focus {
    border-bottom-color: #aaaaaa;
    outline: none;
  }
`;

const Wrapper = styled.div`
  margin: 0.25rem 0;
`;

const AddRestaurant = ({
  onAddRestaurant: pushAddRestaurant
}: AddRestaurantProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register,
    reset
  } = useForm<FormData>({ mode: "onChange" });

  if (!isAdding)
    return (
      <Wrapper>
        <AddRestaurantButton onClick={() => setIsAdding(true)}>
          + Add Restaurant
        </AddRestaurantButton>
      </Wrapper>
    );

  const onSubmit = handleSubmit(async ({ name }) => {
    await pushAddRestaurant({ name });
    reset();
    setIsAdding(false);
  });

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <TextField
          autoFocus
          disabled={isSubmitting}
          name="name"
          type="text"
          ref={register({ required: true })}
        />
        <button disabled={isSubmitting || !isValid} type="submit">
          Add
        </button>
      </form>
    </Wrapper>
  );
};

export default AddRestaurant;

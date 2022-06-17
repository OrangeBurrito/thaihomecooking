<script>
  import Input from "$lib/components/forms/input/Input.svelte";
  import NumberInput from "$lib/components/forms/input/NumberInput.svelte";
  import SelectInput from "$lib/components/forms/input/SelectInput.svelte";
  import Form from "./Form.svelte";
  import TextareaInput from "./input/TextareaInput.svelte";

  let currentForm = 1;

  function checkValues(inputs) {
		let checklist = []

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].reportValidity() === true) {
				checklist.push(1)
			} else {
				break;
			}
		}
		
		if (checklist.length === inputs.length) {
			currentForm++
		}
	}

  function nextStep() {
		let inputs = document.querySelector(`[data-step='${currentForm}']`).getElementsByTagName('input')
		checkValues(inputs)
  }

  function previousStep() {
    if (currentForm > 0) {
      console.log(currentForm);
      currentForm = currentForm - 1;
    }
  }
</script>

<Form name="booking" method="POST" netlify>
  <section class="form-section" data-step="1" class:shown={currentForm === 1}>
    <SelectInput id="session" name="session-type" required label="I'd like to book">
      <option value="morning">Morning Session</option>
      <option value="afternoon">Afternoon Session</option>
      <option value="evening">Evening Session</option>
    </SelectInput>
    <Input type="date" id="date" name="date" label="on:" required />
    <NumberInput id="students" name="number-of-students" placeholder="2" min="1" max="10" label="for:" required>students</NumberInput>
  </section>

  <section class="form-section" data-step="2" class:shown={currentForm === 2}>
    <Input type="text" id="fname" name="first-name" label="first name:" required />
    <Input type="text" id="lname" name="last-name" label="last name:" required />
    <Input type="email" id="email" name="email" label="email:" required />
  </section>

  <section class="form-section" data-step="3" class:shown={currentForm === 3}>
    <Input type="text" id="dish-1" name="dish-1" label="dish #1:" required />
    <Input type="text" id="dish-2" name="dish-2" label="dish #2:" />
    <Input type="text" id="dish-3" name="dish-3" label="dish #3:" />
  </section>

  <section class="form-section" data-step="4" class:shown={currentForm === 4}>
    <TextareaInput id="comments" name="comments" label="Additional comments:" />
  </section>

  <button on:click|preventDefault={previousStep} disabled={currentForm <= 1}>Previous</button>
  {#if currentForm < 4}
    <button on:click|preventDefault={nextStep}>Next</button>
  {:else}
    <button type="submit">Submit</button>
  {/if}
</Form>

<style>
  .form-section {
    display: none;
  }

  .shown {
    display: block;
  }

  button:disabled {
    background: gray;
  }
</style>

<script>
  import Input from "$lib/components/forms/input/Input.svelte";
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
		<div class="text">
			<p>Choose your lesson plan and date of lesson below</p>
		</div>

    <Input type="select" id="session" name="session-type" required label="I'd like to book a">
      <option value="morning">Morning Session</option>
      <option value="afternoon">Afternoon Session</option>
      <option value="evening">Evening Session</option>
		</Input>
    <Input type="date" id="date" name="date" min={new Date().toLocaleDateString('en-CA')} label="during" required />
    <Input type="number" id="students" name="number-of-students" placeholder="2" min="1" max="10" label="for" suffix="students" required/>
  </section>

  <section class="form-section" data-step="2" class:shown={currentForm === 2}>
		<div class="text">
			<p>Please enter your contact information below</p>
		</div>
    <Input type="text" id="fname" name="first-name" label="first name:" required />
    <Input type="text" id="lname" name="last-name" label="last name:" required />
    <Input type="email" id="email" name="email" label="email:" required />
  </section>

  <section class="form-section" data-step="3" class:shown={currentForm === 3}>
		<div class="text">
			<p>Choose up to three dishes or desserts from our <a class="link-light" href="/menu" target="_blank">menu</a></p>
		</div>
    <Input type="text" id="dish-1" name="dish-1" label="dish #1:" required />
    <Input type="text" id="dish-2" name="dish-2" label="dish #2:" />
    <Input type="text" id="dish-3" name="dish-3" label="dish #3:" />
  </section>

  <section class="form-section" data-step="4" class:shown={currentForm === 4}>
		<div class="text">
			<p>Add additional information, food preferences, and any dietary restrictions or allergies you may have below</p>
		</div>
    <TextareaInput id="comments" name="comments" label="Additional comments:" />
  </section>

	<div class="buttons">
		<button on:click|preventDefault={previousStep} disabled={currentForm <= 1}>Previous</button>
		{#if currentForm < 4}
			<button on:click|preventDefault={nextStep}>Next</button>
		{:else}
			<button type="submit">Submit</button>
		{/if}
	</div>
</Form>

<style>
  .form-section {
    display: none;
  }

	.form-section .text {
		padding-bottom: 1rem;
	}

  .shown {
    display: block;
  }

	.buttons {
		display: flex;
		justify-content: space-between;
	}

	.buttons button {
		padding: 0.6rem 1rem;
	}

  button:disabled {
		opacity: 0.5;
  }

	button:disabled:hover {
		cursor:not-allowed;
		background: var(--primary)
	}
</style>

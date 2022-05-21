<script>
  import Input from "$lib/components/FormInput/Input.svelte";
  import NumberInput from "$lib/components/FormInput/NumberInput.svelte";
  import SelectInput from "$lib/components/FormInput/SelectInput.svelte";
  import TextareaInput from "./FormInput/TextareaInput.svelte";

  export let fullForm = false;
</script>

{#if fullForm}
  <form action="">
    <section>
      <h2>when</h2>
      <Input type="date" id="date" name="date" label="on:" required />
      <SelectInput id="session" name="session-type" label="for a:" required>
        <option value="morning">Morning Session</option>
        <option value="afternoon">Afternoon Session</option>
        <option value="evening">Evening Session</option>
      </SelectInput>
      <NumberInput id="students" name="number-of-students" label="for:" placeholder="2">students</NumberInput>
    </section>

    <section>
      <h2>who</h2>
      <Input type="text" id="full-name" name="full-name" label="full name: " required />
      <Input type="email" id="email" name="email" label="email:" required />
      <Input type="tel" id="phone-number" name="phone-number" label="phone number:" />
    </section>

    <section>
      <h2>what and why</h2>

      <fieldset>
        <legend>Dishes to make</legend>
        <p>(choose up to three dishes)</p>

        <div>
          <Input type="text" id="dish-one" name="dish-one" label="Dish #1" required />
          <Input type="text" id="dish-two" name="dish-two" label="Dish #2" />
          <Input type="text" id="dish-three" name="dish-three" label="Dish #3" />
        </div>

        <div>
          <TextareaInput id="comments" name="comments" label="Additional comments:" />
        </div>
      </fieldset>
    </section>

    <button type="submit">Submit</button>
  </form>
{:else}
  <form method="post" action="/booking" class="preview-form">
    <SelectInput id="session" name="session-type" required label="I'd like to book">
      <option value="morning">Morning Session</option>
      <option value="afternoon">Afternoon Session</option>
      <option value="evening">Evening Session</option>
    </SelectInput>
    <Input type="date" id="date" name="date" label="on:" required />
    <NumberInput id="students" name="number-of-students" placeholder="2" min="1" max="10" label="for:" required>students</NumberInput>
    <div>
      <button type="submit" class="submit-btn">Submit</button>
    </div>
  </form>
{/if}

<style>
	form {
		display: grid;
		gap: 1rem;
	}

	:global(label) {
		font-style: italic;
		font-size: 1.1rem;
	}

	.submit-btn {
		width: 100%;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
	}
</style>
<script>
  import Form from "$lib/components/forms/Form.svelte";
  import Input from "$lib/components/forms/input/Input.svelte";
  import NumberInput from "$lib/components/forms/input/NumberInput.svelte";
  import SelectInput from "$lib/components/forms/input/SelectInput.svelte";
</script>

<Form name="booking" method="POST" netlify>
    <SelectInput id="session" name="session-type" required label="I'd like to book">
      <option value="morning">Morning Session</option>
      <option value="afternoon">Afternoon Session</option>
      <option value="evening">Evening Session</option>
    </SelectInput>
    <Input type="date" id="date" name="date" label="on:" required/>
    <NumberInput id="students" name="number-of-students" placeholder="2" min="1" max="10" label="for:" required>students</NumberInput>
</Form>

<style>
	:global(label) {
		font-style: italic;
		font-size: 1.1rem;
	}
</style>
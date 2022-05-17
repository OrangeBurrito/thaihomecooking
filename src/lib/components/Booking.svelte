<script>
	import FormInput from '$lib/components/FormInput.svelte'

	export let fullPage = false;

	function onSubmitBookingPreview(e) {
		const formData = new FormData(e.target);

		const data = {}
		for (let field of formData) {
			const [key,value] = field
			data[key] = value
		}

		console.log(data)
	}
</script>

{#if fullPage}
<form action="">
	<section>
		<h2>whene</h2>
		<FormInput type="date" id="date" name="date" required>on:</FormInput>
		<div>
			<label for="session">for a:</label>
			<abbr title="required">*</abbr>
			<select id="session" name="session-type" required>
				<option value="morning">Morning Session</option>
				<option value="afternoon">Afternoon Session</option>
				<option value="evening">Evening Session</option>
			</select>
		</div>
		<div>
			<FormInput type="number" id="students" name="number-of-students" placeholder="2">for:</FormInput>
			<label for="students">for:</label>
			<abbr title="required">*</abbr>
			<input type="number" id="students" name="number-of-students" placeholder="2" min="1" max="10" required> -->
			<span>students</span>
		</div>
	</section>
	
	<section>
		<h2>who</h2>
		<FormInput type="text" id="full-name" name="full-name" required>full name:</FormInput>
		<FormInput type="email" id="email" name="email" required>email:</FormInput>
		<FormInput type="tel" id="phone-number" name="phone-number">phone number:</FormInput>
	</section>

	<section>
		<h2>what and why</h2>
			
		<fieldset>
			<legend>Dishes to make</legend>
			<p>(choose up to three dishes)</p>

			<div>
				<label for="search-food">Search</label>
				<input type="search" id="search-food" name="search-food" placeholder="Search for dishes">
				<select name="" id="">
					<option value="dishes">Dishes</option>
					<option value="desserts">Desserts</option>
				</select>
			</div>

			<div>
				<h3>Dishes</h3>
				<div>
					<input type="checkbox" id="food1" name="food1">
					<label for="food1">Food1</label>
				</div>
			</div>

			<div>
				<h3>Desserts</h3>
				<div>
					<input type="checkbox" id="food1" name="food1">
					<label for="food1">Food1</label>
				</div>
				<div>
					<input type="checkbox" id="food2" name="food2">
					<label for="food2">Food2</label>
				</div>
				<div>
					<input type="checkbox" id="food3" name="food3">
					<label for="food3">Food3</label>
				</div>
			</div>
		</fieldset>
	
		<div>
			<label for="comments">Additional comments:</label>
			<textarea id="comments" name="comments"></textarea>
		</div>
	</section>

	<button type="submit">Submit</button>
</form>
{:else}
<div class="booking-preview">
	<h2>Book a cooking class</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

	<form action="/booking" method="get" on:submit|preventDefault={onSubmitBookingPreview}>
		<FormInput type="date" id="date" name="date" label="on:" required/>
		<FormInput type="select" id="session" name="session-type" required>
			<option value="morning">Morning Session</option>
			<option value="afternoon">Afternoon Session</option>
			<option value="evening">Evening Session</option>
		</FormInput>
		<FormInput type="number" id="students" name="number-of-students" placeholder="2" min=1 max=10 label="for:" required>students</FormInput>
		<div>
		<button type="submit">Submit</button>
	</form>
</div>
{/if}

<style>
	.booking-preview {
		background: var(--primary-variant);
		color: var(--on-primary-variant);
	}
</style>
<script>

</script>

<h1>book a cooking class</h1>

<form action="">
	<section>
		<h2>when</h2>
		<div>
			<label for="date">on:</label>
			<abbr title="required">*</abbr>
			<input type="date" id="date" name="date-of-class" required>
		</div>
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
			<label for="students">for:</label>
			<abbr title="required">*</abbr>
			<input type="number" id="students" name="number-of-students" placeholder="2" min="1" max="10" required>
			<span>students</span>
		</div>
	</section>
	
	<section>
		<h2>who</h2>
		<div>
			<label for="full-name">full name:</label>
			<abbr title="required">*</abbr>
			<input type="text" id="full-name" name="full-name" required> 
		</div>
		<div>
			<label for="email">email:</label>
			<abbr title="required">*</abbr>
			<input type="email" id="email" name="email" required>
		</div>
		<div>
			<label for="phone-number">tel</label>
			<input type="tel" id="phone-number" name="phone-number">
		</div>
	</section>

	<section>
		<h2>what and why</h2>
			
		<fieldset>
			<legend>Dishes to make</legend>
			<p>(choose up to three dishes)</p>

			<div>
				<label for="search-food">Search</label>
				<input type="search" id="search-food" name="search-food" placeholder="Search for dishes">
				<!-- <select name="" id="">
					<option value="dishes">Dishes</option>
					<option value="desserts">Desserts</option>
				</select> -->
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
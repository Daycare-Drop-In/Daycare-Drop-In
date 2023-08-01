<form className="formPanel" onSubmit={registerUser}>
	<h2>Register New Family</h2>
	{errors.registrationMessage && (
		<h3 className="alert" role="alert">
			{errors.registrationMessage}
		</h3>
	)}
	<div>
		<label htmlFor="username">
			Email:
			<input
				type="text"
				placeholder="youremail@example.com"
				name="username"
				value={username}
				required
				onChange={(event) => setUsername(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="password">
			Password:
			<input
				type="password"
				name="password"
				value={password}
				required
				onChange={(event) => setPassword(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<label htmlFor="first_name">
			First Name:
			<input
				type="text"
				name="first_name"
				value={firstName}
				required
				onChange={(event) => setFirstName(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<label htmlFor="last_name">
			Last Name:
			<input
				type="text"
				name="last_name"
				value={lastName}
				required
				onChange={(event) => setLastName(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<label htmlFor="family_name">
			Family Name:
			<input
				type="text"
				name="family name"
				placeholder="A nickname for your family"
				value={familyName}
				required
				onChange={(event) => setFamilyName(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<label htmlFor="phone_number">
			Phone Number:
			<input
				type="text"
				name="phone_number"
				placeholder="(123) 456-7890"
				value={phoneNumber}
				required
				onChange={(event) => setPhoneNumber(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<label htmlFor="street_address">
			Street Address:
			<input
				type="text"
				name="address"
				value={address}
				required
				onChange={(event) => setAddress(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="unit">
			Unit:
			<input
				type="text"
				name="unit"
				value={unit}
				onChange={(event) => setUnit(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="city">
			City:
			<input
				type="text"
				name="city"
				value={city}
				required
				onChange={(event) => setCity(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="state">
			State:
			<input
				type="text"
				name="state"
				value={state}
				required
				onChange={(event) => setState(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="zip">
			Zipcode:
			<input
				type="number"
				name="zip"
				value={zip}
				required
				onChange={(event) => setZip(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="photo_url">
			Photo:
			<input
				type="url"
				name="photo_url"
				value={photo_Url}
				onChange={(event) => setPhoto_Url(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<label htmlFor="access_code">
			Family Access Code:
			<input
				type="text"
				name="photo"
				value={accessCode}
				required
				onChange={(event) => setAccessCode(event.target.value)}
			/>
		</label>
	</div>

	<div>
		<input className="btn" type="submit" name="submit" value="Register" />
	</div>
</form>;

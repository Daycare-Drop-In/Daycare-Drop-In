<form className="formPanel" onSubmit={login}>
	<h2>Login</h2>
	{errors.loginMessage && (
		<h3 className="alert" role="alert">
			{errors.loginMessage}
		</h3>
	)}
	<div>
		<label htmlFor="username">
			Username:
			<input
				type="text"
				name="username"
				required
				value={username}
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
				required
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
		</label>
	</div>
	<div>
		<input className="btn" type="submit" name="submit" value="Log In" />
	</div>
</form>;

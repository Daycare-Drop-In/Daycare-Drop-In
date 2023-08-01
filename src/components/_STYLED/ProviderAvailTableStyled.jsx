<div className="container">
	<table border="1">
		<tr>
			<th>Date</th>
			<th>Infant</th>
			<th>Toddler</th>
			<th>Preschooler</th>
			<th>School Age</th>
		</tr>
		<tr>
			<td>
				<select onChange={handleDateChange}>
					{dateOptions.map((date) => (
						<option key={date} value={date}>
							{date}
						</option>
					))}
				</select>
			</td>
			<td>
				<input
					type="number"
					value={infant}
					min="0"
					max="9"
					onChange={handleInfantChange}
				/>
			</td>
			<td>
				<input
					type="number"
					value={toddler}
					min="0"
					max="9"
					onChange={handleToddlerChange}
				/>
			</td>
			<td>
				<input
					type="number"
					value={preschool}
					min="0"
					max="9"
					onChange={handlePreschoolChange}
				/>
			</td>
			<td>
				<input
					type="number"
					value={schoolage}
					min="0"
					max="9"
					onChange={handleSchoolageChange}
				/>
			</td>
			<td>
				<button onClick={handleSubmit}>Submit</button>
			</td>
		</tr>
		{availabilityArray.map((entryRow) => (
			<tr key={entryRow.id}>
				<td>{entryRow.date}</td>
				<td>{entryRow.infant}</td>
				<td>{entryRow.toddler}</td>
				<td>{entryRow.pre_k}</td>
				<td>{entryRow.schoolage}</td>
				<td>
					<button onClick={() => handleDelete(entryRow.id)}>
						Delete
					</button>
				</td>
			</tr>
		))}
	</table>
</div>;

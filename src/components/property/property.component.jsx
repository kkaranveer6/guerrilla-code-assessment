import React from 'react';
import CustomButton from '../button/button.component';
import './property.styles.css';

const Property = () => {

	const getData = () => {
		fetch("https://content.wpgraphql.com/graphql", {
			method: "POST",
			headers: { "Content-Type": "application/json", "Authorization": "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk" },
			body: JSON.stringify({
				query: `
					propertyCollection(limit:6) {
						items {
							id
							title
							address
							category
							image {
								url
							}
						}
					}
				}
				`,
			}),
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
	}

	return (
	<>
		<section className="property-section">
			<h3>Properties</h3>
			<p className="subheading">Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>

			<div className="properties">
				<div className="property">
					<div className="info"></div>
				</div>
				<div className="property">
					<div className="info"></div>
				</div>
				<div className="property">
					<div className="info"></div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px',
				}}
			>
				<CustomButton className="filled" onClick={() => getData()}>Load More</CustomButton>
			</div>
		</section>
	</>
	);
}

export default Property;
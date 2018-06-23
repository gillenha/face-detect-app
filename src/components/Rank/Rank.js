import React from 'react';

const Rank = ({name, entries}) => {
	return(
			<div>
				<div className="white f3">
				{`Welcome, ${name}! Your current number of entries is: `}
				</div>
				<div className="white f1">
					{entries}
				</div>
			</div>
		);
}

export default Rank;
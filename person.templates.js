$.templates("personExternalDemo",
    `
        <div style='color:red'>
            <label>full Name : {{:fullName}}</label>
        </div>
    `
);

$.templates("personForDemo",
    `
        <ul>
            {{for people}}
                <li>
                    {{:fullName}}
                </li>
            {{/for}}
        </ul>
    `
);
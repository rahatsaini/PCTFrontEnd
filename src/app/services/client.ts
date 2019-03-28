export class Client {
    name: string = 'John Smith';
    maritalStatus: string = 'Single';
    gender: string = 'Male';
    age: number = 33;
    suburb: string = 'Preston';
    postcode: string = '3972';
    state: string = 'VIC';
    occupation: string = 'Electrician';
    employer: string = 'Schneider';
    //lodgedDate = new Date(2014, 7, 18);
    lodgedDate = '26 August 2014';
    accidentDetails = [ 'Hit by a car from behind while riding a bike at 7pm on 18 August 2014', 'Taken to the Alfred Hospital by ambulance'];
    healthDetails = [ 'Fit and active', 'No previous health issues' ];
    postInjuryConsiderations = [ 'Delayed recovery', ' Issues with mobility', 'Persistent pain', 'Anxiety and depression leading to social isolation', 'Delays in return to work' ];
    returnToWorkConsiderations = [ 'Nil work 6 months', 'April commenced vocational guidance - 2 failed attempts – first original job (not able to undertake physical work ) second in a clerical role - bot suited to his personality' ];
    recoveryBarriers = [ 'Persistent pain', 'Anxiety and depression', 'Legal = conflicting IMED reports - Mental Harm claim significant factor in recovery' ];

    timelineData = [
        {
            start: new Date(2014, 7, 18),
            end: new Date(2014, 7, 18),
            content: ' ',
            group: 'Group: Recovery',
            className: 'acute-care',
            title: 'Alfred Hospital',
            description: 'Initial admission',
            isGroup: true,
        },
        {
            start: new Date(2014, 7, 18),
            end: new Date(2014, 7, 31),
            content: ' ',
            group: 'Acute care',
            className: 'acute-care',
            title: 'Alfred Hospital',
            description: 'Initial admission',
            total: 14000,
        },
        {
            start: new Date(2015, 0, 26),
            end: new Date(2015, 1, 1),
            content: ' ',
            group: 'Acute care',
            className: 'acute-care',
            title: 'Alfred Hospital',
            description: 'Removal of pins',
            total: 14000,
        },
        {
            start: new Date(2014, 7, 18),
            end: new Date(2014, 9, 19),
            content: ' ',
            group: 'Orthopaedic surgeon',
            className: 'orthopaedic',
            title: 'Dr. Jones',
            description: 'Description goes here...',
            total: 5000,
        },
        {
            start: new Date(2015, 0, 26),
            end: new Date(2015, 1, 1),
            content: ' ',
            group: 'Orthopaedic surgeon',
            className: 'orthopaedic',
            title: 'Dr. Jones',
            description: 'Description goes here...',
            total: 5000,
        },
        {
            start: new Date(2014, 7, 18),
            end: new Date(2016, 3, 10),
            content: ' ',
            group: 'General practitioner',
            className: 'general-practitioner',
            title: 'Dr. Bates',
            description: 'Description goes here...',
            total: 4000,
        },        
        {
            start: new Date(2014, 9, 6),
            end: new Date(2014, 9, 12),
            content: ' ',
            group: 'Home modifications',
            className: 'home-modifications',
            title: 'Home modifications',
            description: 'Description goes here...',
            total: 10000,
        },    
        {
            start: new Date(2014, 9, 13),
            end: new Date(2015, 1, 8),
            content: ' ',
            group: 'Wheelchair',
            className: 'wheelchair',
            title: 'Wheelchair',
            description: 'Description goes here...',
            total: 0,
        },            
        {
            start: new Date(2015, 1, 9),
            end: new Date(2015, 4, 23),
            content: ' ',
            group: 'Crutches',
            className: 'crutches',
            title: 'Crutches',
            description: 'Description goes here...',
            total: 0,
        },            
        {
            start: new Date(2014, 8, 22),
            end: new Date(2015, 7, 16),
            content: ' ',
            group: 'Physiotherapist',
            className: 'physiotherapist',
            title: 'Dr. Wilson',
            description: 'Description goes here...',
            total: 7000,
        },          
        {
            start: new Date(2015, 0, 26),
            end: new Date(2016, 1, 15),
            content: ' ',
            group: 'Psychiatrist',
            className: 'psychiatrist',
            title: 'Dr. Bruce',
            description: 'Description goes here...',
            total: 10000,
        },
        {
            start: new Date(2015, 8, 7),
            end: new Date(2016, 3, 10),
            content: ' ',
            group: 'Psychologist',
            className: 'psychologist',
            title: 'Dr. Morrison',
            description: 'Description goes here...',
            total: 8000,
        },        
        {
            start: new Date(2014, 7, 18),
            end: new Date(2015, 7, 18),
            content: ' ',
            group: 'Group: Return to work',
            className: 'Return to work',
            title: 'Return to work',
            description: 'Description goes here...',
            isGroup: true,
        },    
        {
            start: new Date(2014, 7, 18),
            end: new Date(2015, 2, 1),
            content: ' ',
            group: 'Loss of earnings',
            className: 'loss-of-earnings',
            title: 'Loss of earnings',
            description: 'Description goes here...',
            total: 70000,
        },    
        {
            start: new Date(2015, 2, 23),
            end: new Date(2015, 3, 12),
            content: ' ',
            group: 'Loss of earnings',
            className: 'loss-of-earnings',
            title: 'Loss of earnings',
            description: 'Description goes here...',
            total: 70000,
        },                
        {
            start: new Date(2015, 4, 25),
            end: new Date(2015, 5, 14),
            content: ' ',
            group: 'Loss of earnings',
            className: 'loss-of-earnings',
            title: 'Loss of earnings',
            description: 'Description goes here...',
            total: 70000,
        },
        {
            start: new Date(2015, 6, 27),
            end: new Date(2016, 3, 10),
            content: ' ',
            group: 'Loss of earnings',
            className: 'loss-of-earnings',
            title: 'Loss of earnings',
            description: 'Description goes here...',
            total: 70000,
        },        
        {
            start: new Date(2015, 0, 19),
            end: new Date(2015, 2, 1),
            content: ' ',
            group: 'Vocational guidance',
            className: 'vocational-guidance',
            title: 'Vocational guidance',
            description: 'Description goes here...',
            total: 3000,
        },         
        {
            start: new Date(2015, 2, 16),
            end: new Date(2015, 3, 5),
            content: ' ',
            group: 'Vocational guidance',
            className: 'vocational-guidance',
            title: 'Vocational guidance',
            description: 'Description goes here...',
            total: 3000,
        },
        {
            start: new Date(2015, 4, 25),
            end: new Date(2015, 5, 14),
            content: ' ',
            group: 'Vocational guidance',
            className: 'vocational-guidance',
            title: 'Vocational guidance',
            description: 'Description goes here...',
            total: 3000,
        },
        {
            start: new Date(2015, 2, 2),
            end: new Date(2015, 2, 17),
            content: ' ',
            group: 'Return to work',
            className: 'return-to-work',
            title: 'Return to work',
            description: 'Description goes here...',
            total: 9000,
        },         
        {
            start: new Date(2015, 3, 5),
            end: new Date(2015, 4, 25),
            content: ' ',
            group: 'Return to work',
            className: 'return-to-work',
            title: 'Return to work',
            description: 'Description goes here...',
            total: 9000,
        },         
        {
            start: new Date(2015, 5, 15),
            end: new Date(2015, 6, 26),
            content: ' ',
            group: 'Return to work',
            className: 'return-to-work',
            title: 'Return to work',
            description: 'Description goes here...',
            total: 9000,
        },         
        {
            start: new Date(2015, 8, 7),
            end: new Date(2015, 8, 7),
            content: ' ',
            group: 'Group: Claims',
            className: 'Claims',
            title: 'Claims',
            description: 'Description goes here...',
            isGroup: true,
        },     
        {
            start: new Date(2015, 8, 7),
            end: new Date(2015, 8, 13),
            content: ' ',
            group: 'Independent medical examination ',
            className: 'independent-medical-examination',
            title: 'Independent medical examination',
            description: 'Description goes here...',
            total: 5000,
        }, 
        {
            start: new Date(2015, 8, 21),
            end: new Date(2015, 8, 27),
            content: ' ',
            group: 'Independent medical examination ',
            className: 'independent-medical-examination',
            title: 'Independent medical examination',
            description: 'Description goes here...',
            total: 5000,
        },        
        {
            start: new Date(2016, 7, 21),
            end: new Date(2016, 7, 27),
            content: ' ',
            group: 'Independent medical examination ',
            className: 'independent-medical-examination',
            title: 'Independent medical examination',
            description: 'Description goes here...',
            total: 5000,
        },        
        {
            start: new Date(2014, 8, 8),
            end: new Date(2016, 3, 10),
            content: ' ',
            group: 'Legal',
            className: 'legal',
            title: 'Legal',
            description: 'Description goes here...',
            total: 0,
        },     
        {
            start: new Date(2016, 10, 1),
            end: new Date(2016, 10, 30),
            content: ' ',
            group: 'Legal',
            className: 'legal-negotiations',
            title: 'Negotiations',
            description: 'Description goes here...',
            total: 0,
        },     
        
                
        /*
        {
            start: new Date(2015, 8, 22),
            end: new Date(),
            content: ' ',
            group: 'Wheelchair and ramp',
            className: 'green',
            title: 'Wheelchair and ramp',
            description: 'Claimant request organised pre discharge and in place',
            requested: null,
            approved: new Date(2015, 8, 12),
        },
        {
            start: new Date(2015, 8, 22),
            end: new Date(2015, 11, 22),
            content: ' ',
            group: 'Personal care',
            className: 'green',
            title: 'Personal care',
            description: 'Claimant request',
            requested: new Date(2014, 8, 18),
            approved: new Date(2015, 8, 18),
        },
        {
            start: new Date(2015, 8, 22),
            end: new Date(2015, 11, 22),
            content: ' ',
            group: 'Domestic assistance',
            className: 'green',
            title: 'Domestic assistance',
            description: 'Claimant request',
            requested: new Date(2014, 8, 18),
            approved: new Date(2015, 8, 18),
        },
        */
    ];
        
    constructor() {
    }

    getClientDetails()
    {
        var content = '';

        content += '<h4>Client</h4>';
        content += '<strong>John Smith</strong><br>';
        content += 'Single Male<br>';
        content += '33 years of age (born 1st July 1983)<br>';
        content += '1 Green St. Preston VIC 3072 (shared house)<br>';
        content += '<p>';
        content += '<h4>Employment</h4>';
        content += 'Electrician (Schneider) at time of accident<br>';
        content += '<p>';
        content += '<h4>Accident</h4>';
        content += 'Hit by a car from behind while riding a bike at 7pm on 19 August 2014<br>';
        content += 'Taken to the Alfred Hospital by ambulance<br>';
        content += '<p>';
        content += '<h4>Claim</h4>';
        content += 'Lodged on 26 August 2014<br>';

        return content;
    }

    getInjuryDetails()
    {
        var content = '';

        content += '<h4>Injury</h4>';
        content += '<ul>';
        content += '<li>Crush fracture to right ankle</li>';
        content += '<li>Bruising / soft tissue injury to right knee</li>';
        content += '<li>Bruising / soft tissue injury to left elbow</li>';
        content += '</ul>';
                                    
        return content;
    }
    
    getInjuryDetails_OLD()
    {
        var content = '';

        content += '<h4>Injury</h4>';
        content += '<p>Occured on 19th August 2014</p>';
        content += '<p>Collision with car while riding a bicycle</p>';
        content += '<p></p>';
        content += 'Condition:';
        content += '<ul>';
        content += '<li>Crush to right ankle</li>';
        content += '<li>Bruising / soft tissue injury to right knee</li>';
        content += '<li>Bruising / soft tissue injury to left elbow</li>';
        content += '</ul>';
        content += '<p>';
        content += '<h4>Pre-injury</h4>';
        content += 'Condition:';
        content += '<ul>';
        content += '<li>Fit and active</li>';
        content += '<li>No previous health issues</li>';
        content += '</ul>';
                                    
        return content;
    }

    getProgressDetails()
    {
        var content = '';

        //content += '<h4>Progress</h4>';

        content += '<p>';
        content += '<table class="standard-table">';
        content += '<tr>';
        content += '<th>Pre-injury</th>';
        content += '<th>Post-injury</th>';
        content += '</tr>';
        content += '<tr>';
        content += '<td>';
        content += '<ul>';
        content += '<li>Fit and active</li>';
        content += '<li>No previous health issues</li>';
        content += '</ul>';
        content += '</td>';
        content += '<td>';
        content += '<ul>';
        content += '<li>Delayed recovery</li>';
        content += '<li>Issues with mobility</li>';
        content += '<li>Persistent pain</li>';
        content += '<li>Anxiety and depression leading to social isolation</li>';
        content += '<li>lays in return to work</li>';
        content += '</ul>';
        content += '</td>';
        content += '</tr>';
        content += '</table>';
        content += '</p>';

        content += '<p>';
        content += '<strong>Return to work</strong>';
        content += '<ul>';
        content += '<li>Nil work 6 months</li>';
        content += '<li>April commenced vocational guidance - 2 failed attempts – first original job (not able to undertake physical work ) second in a clerical role - bot suited to his personality</li>';
        content += '</ul>';
        content += '</p>';

        content += '<p>';
        content += '<strong>Barriers to recovery</strong>';
        content += '<ul>';
        content += '<li>Persistent pain</li>';
        content += '<li>Anxiety and depression</li>';
        content += '<li>Legal = conflicting IMED reports - Mental Harm claim significant factor in recovery</li>';
        content += '</ul>';
        content += '</p>';

        content += '<p>';
        content += '<strong>Actions to address barriers to recovery</strong>';
        content += '<table class="standard-table">';
        content += '<tr>';
        content += '<th>Barrier</th>';
        content += '<th>Action</th>';
        content += '<th>Expected outcome and time frame</th>';
        content += '</tr>';
        content += '<tr>';
        content += '<td>Persistent pain</td>';
        content += '<td>Physio, medication, pain clinic  exercise  program</td>';
        content += '<td>Full functionality  in 4-6 mths</td>';
        content += '</tr>';
        content += '<tr>';
        content += '<td>Anxiety and depression</td>';
        content += '<td>Psych action  plan medication, therapy, exercise  and lifestyle plan</td>';
        content += '<td>Improvement in 4- 6 mths</td>';
        content += '</tr>';
        content += '<tr>';
        content += '<td>Legal = conflicting IMED reports  - Mental Harm claim significant factor in  recovery</td>';
        content += '<td>Compartmentalise legal  proceedings and maintain focus on health and well being<p>Claim management strategy - Look for early settlement</td>';
        content += '<td></td>';
        content += '</tr>';
        content += '</table>';
        content += '</p>';

        return content;
    }

    getBusinessDetails()
    {
        var content = '';

        content += '<h4>Business</h4>';
        content += '<strong>Claims</strong>';
        content += '<ul>';
        content += '<li>Claim form (19-Aug-2014)</li>';
        content += '<li>First contact (16-Sep-2014)</li>';
        content += '<li>3 point contact (18-Sep-2014)</li>';
        content += '<li>Claimant initated contact (24-Sep-2014)</li>';
        content += '<li>Claimant initated contact (23-Sep-2014)</li>';
        content += '<li>Claimant initated contact (18-Sep-2014)</li>';
        content += '<li>Claimant initated contact (17-Sep-2014)</li>';
        content += '<li>Claimant initated contact (11-Sep-2014)</li>';
        content += '<li>Claimant initated contact (8-Sep-2014)</li>';
        content += '<li>Claims Manager initiated contact (5-Sep-2014)</li>';
        content += '</ul>';
                                    
        return content;
    }
}
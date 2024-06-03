// eslint-disable-next-line react/prop-types
function BoxExperience() {   
    const experienceData = [
        {
          id: 1,
          school: 'Formation-La-Manu',
          content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
          duration: '2023-(en cours)',
        },
        {
          id: 2,
          school: 'Formation-La-Manu',
          content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
          duration: '2023-(en cours)',
        },
        {
          id: 3,
          school: 'Formation-La-Manu',
          content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
          duration: '2023-(en cours)',
        },
        {
          id: 4,
          school: 'Formation-La-Manu',
          content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
          duration: '2023-(en cours)',
        },
        {
          id: 5,
          school: 'Formation-La-Manu',
          content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
          duration: '2023-(en cours)',
        },
    ];
    
    return (
        <div className="experience_box">
        {experienceData.map((item, index) => (
          <div key={item.id} className={`experience_box_content-${index + 1}`}>
            <p>{item.school}</p>
            <p>{item.content}</p>
            <p>{item.duration}</p>
          </div>
        ))}
      </div>
    );
}

export default BoxExperience;

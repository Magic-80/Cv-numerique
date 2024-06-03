// eslint-disable-next-line react/prop-types
function BoxProject() {   
    const projectData = [
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
        {
            id: 6,
            school: 'Formation-La-Manu',
            content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
            duration: '2023-(en cours)',
        },
        {
            id: 7,
            school: 'Formation-La-Manu',
            content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
            duration: '2023-(en cours)',
        },
        {
            id: 8,
            school: 'Formation-La-Manu',
            content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
            duration: '2023-(en cours)',
        },
        {
            id: 9,
            school: 'Formation-La-Manu',
            content: 'BACHELOR CHEF DE PROJET DÉVELOPPEMENT ET IA',
            duration: '2023-(en cours)',
        },
        
    ];
    
    return (
        <div className="project_box">
        {projectData.map((item, index) => (
          <div key={item.id} className={`project_box_content-${index + 1}`}>
           
          </div>
        ))}
      </div>
    );
}

export default BoxProject;

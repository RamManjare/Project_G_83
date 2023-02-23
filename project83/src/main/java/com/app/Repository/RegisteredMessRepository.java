package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Registered_Mess;


@Transactional
@Repository
public interface RegisteredMessRepository extends JpaRepository<Registered_Mess, Integer> {

	//SELECT * FROM project.registered_mess where mess_id NOT IN ( SELECT DISTINCT mess_id FROM project.mess_subscription);
	
	@Query("Select  m.mess_id from Registered_Mess m where mess_status_id=60 ")
	public List<Object []> pendingApprovals();
	
	//UPDATE `project`.`registered_mess` SET `mess_status_id` = '50' WHERE (`mess_id` = '1012');
	@Modifying
	@Query("Update  Registered_Mess SET mess_status_id=50 where mess_id= :mess_id")
	public void approveMess(int mess_id);
	
	@Modifying
	@Query("Update  Registered_Mess SET mess_status_id=70 where mess_id= :mess_id")
	public void rejectMess(int mess_id);
	
}

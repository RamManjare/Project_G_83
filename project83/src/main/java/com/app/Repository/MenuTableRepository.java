package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Menu_Table;



@Transactional
public interface MenuTableRepository extends JpaRepository<Menu_Table, Integer> {
	
	@Query("Select m.menu_id from Menu_Table m where mess_id= :mess_id ")
	public List<Object []> getMenuById(int mess_id);
	
	@Modifying
	@Query("Delete from Menu_Table  where menu_id= :menu_id ")
	public void deleteMenu(int menu_id);

}

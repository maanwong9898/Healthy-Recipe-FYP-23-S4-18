package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.BlogDTO; 
import com.FYP18.HealthyRecipe.Entity.Blog; 

import java.util.List; 


public interface BlogRepository extends JpaRepository<Blog, Long>{
    
       
    @Modifying
    @Transactional
    @Query("DELETE FROM Blog b WHERE b.ID = :id")
    void deleteByBlogId(Long id);
 
    @Modifying
    @Transactional 
    @Query("SELECT r FROM Blog r WHERE r.title LIKE %:keyword%")
    List<Blog> findByKeyword(@Param("keyword") String keyword);

    @Modifying
    @Transactional 
    @Query("SELECT r FROM Blog r WHERE r.blogTypeId = :blogTypeId")
    List<Blog> findByBlogTypeId(Long blogTypeId);

     
    @Query(value="SELECT COUNT(r) AS count FROM Blog r WHERE r.userID.id = :id")
    Integer findCountById(@Param("id") String id);

    @Query(value="SELECT COUNT(r) AS count FROM Blog r")
    Integer findTotalBlogCount();
    
    @Modifying
    @Transactional
    @Query("SELECT b FROM Blog b WHERE b.userID.id = :userId")
    List<Blog> findByUserID(String userId); 


    // @Query(value ="SELECT r.title AS title, r.id AS id, r.img AS img, r.introduction AS introduction FROM Blog r WHERE r.id IN :ids", nativeQuery = false)
    // List<Blog> findBlogDTOsByIds(@Param("ids") List<Long> ids);

    @Query(value= "SELECT b FROM Blog b WHERE b.blogTypeId = :blogType")
    List<Blog> findBlogByBlogType(Long blogType);
 
    final String getDTOQuery = "SELECT r.title AS title, r.id AS id, r.img AS img, SUBSTRING_INDEX(SUBSTRING_INDEX(r.info, ' ', 500), ' ', 50) AS introduction, r.publisher AS publisher FROM Blog r ";

    @Query(value= getDTOQuery + " ORDER BY r.createdDateTime LIMIT 3", nativeQuery = false)
    List<BlogDTO> findLatestBlogDTO();

    @Query(value= getDTOQuery + " WHERE r.id NOT IN (:ids) ORDER BY r.createdDateTime LIMIT :count")
    List<BlogDTO> findLatestBlogDTO(@Param("ids") List<Long> ids,@Param("count") Integer count);
 
    @Query(value= getDTOQuery + " ORDER BY r.createdDateTime")
    List<BlogDTO> findLatestBlogDTO(@Param("count") Integer count);
 
    @Query(value = getDTOQuery + " WHERE r.id IN :ids", nativeQuery = false)
    List<BlogDTO> findBlogDTOsByIds(@Param("ids") List<Long> ids);

    

}


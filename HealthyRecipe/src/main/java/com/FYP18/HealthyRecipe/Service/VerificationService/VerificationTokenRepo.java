package com.FYP18.HealthyRecipe.Service.VerificationService;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface VerificationTokenRepo extends JpaRepository<VerificationToken, Long> {
    @Query("SELECT x FROM VerificationToken x WHERE x.token = :token")
    VerificationToken findByToken(String token); 
}
